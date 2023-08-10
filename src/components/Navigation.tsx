import StyledNavigation from "./Navigation.styled";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { Container } from ".";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNavigation>
      <Container>
        <Link href="/">
          <Image src="/logo.png" alt="Family Guy" width={80} height={60} />
        </Link>
        <Link href="/quiz">
          <TbArrowBigRightFilled />
          <span>Take a Quiz</span>
        </Link>
      </Container>
    </StyledNavigation>
  );
}
