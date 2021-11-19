import React, { FC } from "react";
import styled from "styled-components";

// type
import { ContactItem } from '@/constants/ContactItems';

type Props = ContactItem

const ContactCard: FC<Props> = ({ type, icon, link, description, color }) => {
    const titleLink = () => {
        return type === "mail" ? link.split("@")[0] : link.split("/").reverse()[0];
    };
    const clickHandler = () => (type === "mail" ? window.open(`mailto:${link}`) : window.open(link));
    return (
        <Container onClick={clickHandler}>
            <LinkContainer>
                <Icon color={color}>
                    {icon}
                </Icon>
                <ContactLink
                    color={color}
                    target="_blank"
                >
                    @{titleLink()}
                </ContactLink>
            </LinkContainer>
            <Description>{description}</Description>
        </Container>
    );
};

interface IProps {
    color: string
}

const Container = styled.div`
  width: 100%;
  background: linear-gradient(to left, var(--background) 30%, var(--midnight-blue) 100%);
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color-dark);
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  color: ${(props: IProps) => `${props.color}99`};
  svg {
    transform: scale(1.2);
    &:hover {
      cursor: pointer;
      color: ${(props: IProps) => props.color};
    }
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: ${(props: IProps) => `${props.color}99`};
  cursor: pointer;
  &:hover {
    color: ${(props: IProps) => props.color};
  }
`;

const Description = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  color: var(--grey-second);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  &:hover {
    color: var(--white);
    cursor: pointer;
  }
`;

export default ContactCard;