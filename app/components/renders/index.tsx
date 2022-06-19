import { FC, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { usePriorityAccount } from '../../connectors/priority';
import {
  NO_CONNECTED_WALLET,
  OUTSIZE_MISMATCH_ERROR_MESSAGE,
  RENDERER_NOT_FOUND,
} from '../../constants/errors';
import { useRendererContract } from '../../hooks/useContracts';
import { RenderCodeOutputState, RendererMetadataStub } from '../../types';
import { OFFLINE_RENDERERS } from '../../utils/renderers';
import { MultiLineText } from '../texts';

export const PlaceholderRender = styled.div`
  background: rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 0;
  position: relative;
`;

const RenderImage = styled.img`
  border: none;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  shape-rendering: crispEdges;
`;

const RenderImageCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  text-align: center;
  left: 0;
  right: 0;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

const RenderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: rgba(0, 0, 0, 0.05);
`;

export const Render: FC<{
  output: RenderCodeOutputState;
  rendererMetadata: RendererMetadataStub | undefined;
}> = ({ output, rendererMetadata }) => {
  const account = usePriorityAccount();
  const renderer = useRendererContract(rendererMetadata?.address);

  const [rawSvgSrc, setRawSvgSrc] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [isRenderLoading, setIsRenderLoading] = useState(false);

  useEffect(() => {
    if (output?.[1] !== 'success') {
      return;
    }
    const getRawSvgSrc = async () => {
      setErrorMessage(undefined);
      try {
        if (
          !!rendererMetadata?.label &&
          !!OFFLINE_RENDERERS[rendererMetadata.label]
        ) {
          setIsRenderLoading(false);
          console.log('local render');
          const renderRaw = OFFLINE_RENDERERS[rendererMetadata.label].renderRaw(
            output[0],
          );
          setRawSvgSrc(renderRaw);
        } else if (!!renderer) {
          setIsRenderLoading(true);
          const renderRaw = await renderer.renderRaw(output[0]);
          setRawSvgSrc(renderRaw);
          setIsRenderLoading(false);
        } else if (!account) {
          throw new Error(NO_CONNECTED_WALLET);
        } else {
          throw new Error(RENDERER_NOT_FOUND);
        }
      } catch (e: any) {
        console.log(e.message);
        if (e.message.indexOf(OUTSIZE_MISMATCH_ERROR_MESSAGE) !== -1) {
          setErrorMessage('OUTPUT BYTES NOT AT REQUIRED SIZE.');
        } else if (e.message.indexOf(NO_CONNECTED_WALLET) !== -1) {
          setErrorMessage('NO WALLET CONNECTED. CONNECT TO SEE PREVIEW.');
          setRawSvgSrc(undefined);
        } else if (e.message.indexOf(RENDERER_NOT_FOUND) !== -1) {
          setErrorMessage('RENDERER NOT FOUND ON-CHAIN.');
          setRawSvgSrc(undefined);
        } else {
          setErrorMessage(
            'RENDERER ERROR. CHECK CONSOLE LOGS FOR MORE DETAILS.',
          );
        }
      }
      setIsRenderLoading(false);
    };

    getRawSvgSrc();
  }, [account, output, rendererMetadata, renderer]);
  const isCoverOpened = useMemo(() => {
    return isRenderLoading || !!errorMessage;
  }, [isRenderLoading, errorMessage]);

  const imgSrc = useMemo(() => {
    if (!rawSvgSrc)
      return `data:image/svg+xml;utf8,${encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" style="background:#F1F1F1"></svg>',
      )}`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(rawSvgSrc)}`;
  }, [rawSvgSrc]);
  return (
    <RenderContainer>
      <RenderImage width={'100%'} height={'100%'} src={imgSrc} />
      {isCoverOpened && (
        <RenderImageCover
          style={{
            background: !!rawSvgSrc
              ? 'rgba(255, 255, 255, 0.75)'
              : 'rgba(0, 0, 0, 0)',
          }}
        >
          {isRenderLoading && <MultiLineText>Loading...</MultiLineText>}
          {errorMessage && <MultiLineText>{errorMessage}</MultiLineText>}
        </RenderImageCover>
      )}
    </RenderContainer>
  );
};
