import Link from "next/link";
import React, { FC, useState } from "react";

// sidebar items 
import items from "../constants/SideBarItems";
import social_items from "../constants/SocialLinkItems";

// styled
import styled from "styled-components";

// Icons
import LinkIcon from "@mui/icons-material/Link";

const SideBar: FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [linksClick, setLinksClick] = useState(false);
  const handleLinksClick = () => setLinksClick(!linksClick);

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()} />
      <SidebarContainer>
        <SocialLinks clicked={linksClick}>
          <LinkIcon
            style={{ cursor: "pointer" }}
            onClick={() => handleLinksClick()}
          />
          <Details clicked={linksClick}>
            <ButtonContainer>
              {social_items.map(({ id, className, feed, icon }) => (
                <SocialLink
                  key={id}
                  className={className}
                  onClick={() => window.open(feed)}
                >
                  {icon}
                </SocialLink>
              ))}
            </ButtonContainer>
          </Details>
        </SocialLinks>
        <SlickBar clicked={click}>
          {items.map(({ id, path, title, icon }) => {
            return (
              <Item key={id}
                onClick={() => setClick(false)}
              >
                <Link
                  href={path}
                >
                  <a>
                    {icon}
                    <Text clicked={click}>{title}</Text>
                  </a>
                </Link>
              </Item>
            );
          })}
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

interface Props {
  clicked?: boolean
}

const Button = styled.button`
  background-color: var(--dark-blue);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props: Props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props: Props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props: Props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props: Props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--dark-blue);
  width: 3.5rem;
  height: 67.8vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const SlickBar = styled.ul`
  color: var(--grey);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark-blue);
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props: Props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.3s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled.div`
  padding-left: 1rem;
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  a{
    padding: 1rem 0;
    display: flex;
    color: var(--grey);
    &:hover {
      border-right: 4px solid var(--white);
      color: var(--white);
    }
    img {
      width: 1.2rem;
      height: auto;
    }
  }
`;

const Text = styled.span`
  width: ${(props: Props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props: Props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const SocialLinks = styled.div`
  width: ${(props: Props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  border: ${(props: Props) => (props.clicked ? "2px solid var(--link-icon-color)" : "none")};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props: Props) => (props.clicked ? "9rem" : "0")};
  background-color: var(--black);
  color: ${(props: Props) => (!props.clicked ? "var(--white) " : "var(--link-icon-color)")};
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props: Props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 1.5rem;
  button {
    background: none;
    border: none;
    outline: none;
    color: var(--link-icon-color);
    &:hover {
      outline: none;
      cursor: pointer;
    }
  }
  .github:hover {
    color: var(--github);
    box-shadow: var(--github);
  }
  .linked-in:hover {
    color: var(--linked-in);
    box-shadow: var(--linked-in);
  }
  .twitter:hover {
    color: var(--twitter);
    box-shadow: var(--twitter);
  }
`;

const SocialLink = styled.button`
  margin-left: 10px;
`;

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  z-index: +10;
`;

export default SideBar;