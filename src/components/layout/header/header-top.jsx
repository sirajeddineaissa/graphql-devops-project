import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import Dropdown from "@components/ui/dropdown";
import {Col, Container, DropdownItem, Row} from "@bootstrap";
import {HeaderTopWrap, HeaderTopMessage, HeaderTopSetLanCurr} from "@components/layout/header/header.style";

const HeaderTop = ({className}) => {
    return (
        <HeaderTopWrap className={cn(className)}>
            <Container>
                <Row>
                    <Col md={5} lg={3} className="text-center text-md-left">
                        <HeaderTopMessage>
                            Hype Renting Welcomes You!
                        </HeaderTopMessage>
                    </Col>

                    <Col md={7} lg={9}>
                        <HeaderTopSetLanCurr className="mt-2 mt-md-0">
                            <Dropdown heading="English" align="left">
                                <DropdownItem tag="li"><Link href="/">English</Link></DropdownItem>
                                <DropdownItem tag="li"><Link href="/">Français</Link></DropdownItem>
                            </Dropdown>

                            <Dropdown heading="USD" align="left">
                                <DropdownItem tag="li"><Link href="/">$ - USD</Link></DropdownItem>
                                <DropdownItem tag="li"><Link href="/">€ - EUR</Link></DropdownItem>
                            </Dropdown>
                        </HeaderTopSetLanCurr>
                    </Col>
                </Row>
            </Container>
        </HeaderTopWrap>
    );
};

HeaderTop.propTypes = {
    bg: PropTypes.string,
    className: PropTypes.string
};


export default HeaderTop;