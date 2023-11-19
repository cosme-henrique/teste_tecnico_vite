import styled from "styled-components";

export const Container = styled.div `
    width: 570px;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #FFFFFF;
    border-radius: 16px;
    overflow: hidden;
    background-color: #3C3E44;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 48px 100px 0px;

    img {
        height: 220px;
    }

    .container-info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h2 {
            font-size: 20px;
        }

        .container-status {
            display: flex;
            align-items: center;
            gap: 8px;

            span {
                font-weight: 400;
            }
        }

        .container-location {
            margin: 6px 0;

            h3 {
                font-size: 14px;
                color: #e4e4e4;
                font-weight: 400;
                margin-bottom: 4px;
            }
            
        }

        .container-origin {
            h3 {
                font-size: 14px;
                color: #e4e4e4;
                font-weight: 400;
                margin-bottom: 4px;
            }
        }
    }
`