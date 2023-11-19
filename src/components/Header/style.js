import styled from "styled-components";

export const TopHeader = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;

    #logo {
        text-decoration: none;
        color: rgb(32, 35, 41);
        font-size: 24px;
        font-weight: 600;
    }

    .container-links {
        display: flex;
        gap: 24px;
        align-items: center;

        a {
            text-decoration: none;
            font-size: 18px;
            font-weight: 600;
            color: rgb(32, 35, 41);
            transition: all 0.3s;
        }

        a:hover {
            color: rgb(255, 152, 0);
        }

        .link-btn {
            width: 100%;
            padding: 8px 16px;
            border: 2px solid rgb(255, 152, 0);
            border-radius: 8px;
            font-size: 16px;
            text-transform: uppercase;
            transition: all 0.3s;
        }

        .link-btn:hover {
            background-color: rgb(255, 152, 0);
            color: #FFFFFF;
        }
    }

`

export const Container = styled.div `
    width: 100%;
    text-align: center;
    margin-top: 60px;
    
    h1 {
        font-size: 84px;
        color: rgb(32, 35, 41);
    }

`