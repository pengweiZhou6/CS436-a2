
import React from "react";
import styled from "styled-components";

function AboutMe() {
    return (
        <Wrapper>
            <span>AboutMe</span>
            <section>
                <p>
                    I'm Pengwei Zhou!!!
                </p>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 0;
`;

export default AboutMe;