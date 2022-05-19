import { FC } from 'react';
import styled from 'styled-components';
import { ProjectBuilderProvider } from '../../contexts/projectBuilder';
import { useENSorHex } from '../../hooks/useENS';
import { useAllRendererMetadata } from '../../hooks/useRenderer';
import { RendererMetadata } from '../../types';
import { shortenHexString } from '../../utils/hex';
import { getEtherscanAddressUrl, getIPFSUrl } from '../../utils/urls';
import {
  DetailAnchorRow,
  DetailRow,
  InteractiveDetailRowsContainer,
  DetailTitleAnchorRow,
  DetailRowsContainer,
} from '../details/rows';
import {
  OneColumnContainer,
  OneColumnContentContainer,
} from '../divs/oneColumn';
import {
  TwoColumnContainer,
  TwoColumnContentContainer,
} from '../divs/twoColumn';
import { FlexCenterColumn } from '../flexs';
import { PrimaryButton } from '../inputs/button';
import { InputWell, NumberInput, TextArea, TextInput } from '../inputs/input';
import { PlaceholderRender } from '../renders';
import { Text } from '../texts';
import { format } from 'date-fns';

export const Renderers: FC = () => {
  const rendererMetadatas = useAllRendererMetadata();

  return (
    <OneColumnContainer>
      <OneColumnContentContainer>
        <Jumbotron />
        {rendererMetadatas?.map((rm) => (
          <RendererMetadataTable
            {...rm}
            key={`renderer-metadata-table-${rm.id.toHexString()}`}
          />
        ))}
      </OneColumnContentContainer>
    </OneColumnContainer>
  );
};

const RendererMetadataTable: FC<RendererMetadata> = ({
  id,
  address,
  outSize,
  additionalMetadataURI,
  registeredAt,
}) => {
  const name = useENSorHex(address);
  return (
    <DetailRowsContainer>
      <DetailTitleAnchorRow href={getEtherscanAddressUrl(address)}>
        {[`SR-${id.toString().padStart(3, '0')}: ${name}`, '']}
      </DetailTitleAnchorRow>
      <DetailAnchorRow href={getEtherscanAddressUrl(address)}>
        {['CONTRACT', shortenHexString(address)]}
      </DetailAnchorRow>
      <DetailRow>
        {[
          'DISCOVERED AT',
          format(new Date(registeredAt * 1000), 'yyyy-MM-dd hh:mm'),
        ]}
      </DetailRow>
      <DetailRow>
        {['REQUIRED INPUT BYTE STRING SIZE', outSize.toString()]}
      </DetailRow>
      <DetailAnchorRow href={getIPFSUrl(additionalMetadataURI)}>
        {['DOCUMENTATION', 'IPFS']}
      </DetailAnchorRow>
    </DetailRowsContainer>
  );
};

const Jumbotron: FC = () => {
  return (
    <>
      <div>
        <JumbotronText>
          <strong>SUBJECT: CURRENT DECLASSIFIED LIST OF SR-XXX</strong>
        </JumbotronText>
      </div>
      <div>
        <JumbotronText>
          Contained in this document is our up-to-date list of all Special
          Renderers found by the ABFC and the broader public sphere. This is by
          no means exhaustive. Please consult each SR carefully before use.
        </JumbotronText>
      </div>
    </>
  );
};

const JumbotronText = styled(Text)`
  line-height: 20px;
`;
