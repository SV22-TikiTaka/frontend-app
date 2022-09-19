import styled from "styled-components/native";

export const component = styled.View`
    width: 290px;
    border-radius:15px;
    margin: 20px 10px 20px 10px;
`
export const componentTop = styled.View`
    flex:2;
    background-color: #779874;
    min-height: 75px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    align-items: center;
    justify-content: center;
`
export const componentBottom = styled.View`
    flex-basis:auto;
    background-color: white;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    flex-direction: column;
`
export const styledText = styled.Text`
    font-family: 'SB 어그로 B';
    font-size: 25px;
    color: white
`