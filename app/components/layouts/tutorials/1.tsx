import { deployments } from '@abf-monorepo/protocol';
import React, { FC, useMemo } from 'react';
import { TUTORIALS_MAP, TwoColumnTutorialContainer } from '.';
import { CHAIN_ID } from '../../../constants';
import { ROUTES } from '../../../constants/routes';
import {
  TutorialMetadata,
  TutorialsProvider,
  useTutorialContext,
} from '../../../contexts/tutorial';
import { DetailRowsContainer } from '../../details/rows';
import {
  TwoColumnContainer,
  TwoColumnContentContainer,
} from '../../divs/twoColumn';
import { PrimaryButton } from '../../inputs/button';
import { BasicModal } from '../../modal';
import { B, Label, P } from '../../texts';
import { BasicEditor } from './editor';
import { BasicRender } from './render';

const TUTORIAL_1_REWARD = `(pin.abf.dev) /ipfs/QmPVxfE6wcQYabpLgUWsenCQvvDQBivrLWKRxWGPh8JPrR`;

const TUTORIAL_1_METADATA = (refresh?: any): Partial<TutorialMetadata> => {
  const expectedOutputHexStr = `0xff0000000000000000000000000000ff
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    00000000000000000000000000000000000
    0000000000000000000000000000ff00000
    00000000000000000000000ff`;
  return useMemo(
    () => ({
      code: '',
      expectedOutputHexStr,
    }),
    [expectedOutputHexStr],
  );
};

export const Tutorial1: React.FC = () => {
  return (
    <>
      <BasicModal>
        <Label>
          {`--[----->+<]>---.++++++++++++.-.-------.+++++++++++.+++[->+++<]>++.SUCCESS--[--->+<]>-.+.---------.-----------.--[--->+<]>-.-----------.++++++.-.+++++.`}
        </Label>
        <P style={{ marginTop: 25 }}>{TUTORIAL_1_REWARD}</P>
      </BasicModal>
      <TutorialsProvider
        renderer={deployments[CHAIN_ID].renderers.dotMatrix}
        getDefaultTutorialMetadata={TUTORIAL_1_METADATA}
        reward={TUTORIAL_1_REWARD}
      >
        <TwoColumnContainer>
          <div>
            <TwoColumnTutorialContainer>
              <Jumbotron />

              <Editor />
            </TwoColumnTutorialContainer>
          </div>
          <div>
            <TwoColumnContentContainer
              style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
            >
              <BasicRender />
            </TwoColumnContentContainer>
          </div>
        </TwoColumnContainer>
      </TutorialsProvider>
    </>
  );
};

const Jumbotron: FC = () => {
  return (
    <DetailRowsContainer>
      <P>
        <B>ASSIGNMENT: {TUTORIALS_MAP[ROUTES.TRAIN[1]]}</B>
      </P>
      <P>
        <B>SUBJECT: ABFC NEW PERSONNEL TRAINING - MATERIAL 001</B>
      </P>
      <P>
        Alright f**k faces, today we're going to learn how to control a Renderer
        via Brainfuck code.
      </P>
      <P>
        The purpose of this exercise is to understand the relationship between
        values you output via Brainfuck and the Renderer.
      </P>
      <P>
        Additionally, usage of INPUT CONSTANTS allow you to output large values
        without actually needing to create these manually with Brainfuck.
      </P>

      <Label>CHALLENGE</Label>
      <P>
        <B>
          Change the dots in all 4 corners to be MAX_SIZE [0xFF]. All other dots
          should be at MIN_SIZE [0x00].
        </B>
      </P>
    </DetailRowsContainer>
  );
};

const Editor: FC = () => {
  const { onSubmit, isButtonDisabled } = useTutorialContext();
  return (
    <>
      <BasicEditor />
      <PrimaryButton onClick={onSubmit} disabled={isButtonDisabled}>
        SUBMIT ANSWER
      </PrimaryButton>
    </>
  );
};
