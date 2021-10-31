import React, { FC } from "react";
import styled from "styled-components";

// Material-UI
import LinearProgress from "@mui/material/LinearProgress";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"; // badged ones

// type
import { SkillItem } from '../../constants/SkillItems';

type Props = {
    item: SkillItem
}

const SkillCard: FC<Props> = ({ item }) => {
    return (
        <ProgressContainer gotBadge={item.gotBadge}>
            <Title gotBadge={item.gotBadge}>
                <h4>
                    <code>{item.title}</code>
                    {item.gotBadge && <VerifiedOutlinedIcon />}
                </h4>
                <h4 className="precentage">
                    <code>{item.value}</code>%
                </h4>
            </Title>
            <LinearProgress
                variant="determinate"
                value={item.value}
                style={{ width: "100%", height: "6px", borderRadius: "12px" }}
                color="primary"
            />
            {item.gotBadge && (
                <p className="badged-text">Got Linked-In Assesment Badge</p>
            )}
        </ProgressContainer>
    );
};

interface IProps {
    gotBadge?: boolean
}

const ProgressContainer = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 0 12px ${(props: IProps) => (props.gotBadge ? "var(--gradient-dark-green)" : "var(--link-icon-color)")};
  background: linear-gradient(to right, var(--background) 30%, var(--midnight-blue) 100%);
  border: 1px solid ${(props: IProps) => (props.gotBadge ? "var(--gradient-dark-green)" : "var(--link-icon-color)")};
  transition: all 0.2s;
  margin-bottom: 30px;
  .MuiLinearProgress-root {
    .MuiLinearProgress-bar {
      background-color: ${(props: IProps) => (props.gotBadge ? "var(--prog-bar-light-green)" : "var(--prog-bar-light-blue)")};
    }
  }
  .badged-text {
    display: none;
    font-size: 16px;
    color: var(--cyan);
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
  &:hover {
    ${(props: IProps) =>
        props.gotBadge &&
        `
        background: linear-gradient(to right, var(--badged-hover-bg-color) 30%, var(--badged-hover-bg-color-2) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70px;
        cursor: pointer;
        .precentage {
            display: none;
        }
        .MuiLinearProgress-root {
            display: none;
        }
        .badged-text {
            display: block;
        }
      `}
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: ${(props: IProps) => (props.gotBadge ? "var(--cyan)" : "var(--grey-second)")};
  h4 {
    font-weight: 400;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    font-size: 16px;
    svg {
      display: block;
    }
    @media (max-width: 480px) {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export default SkillCard;