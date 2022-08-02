import {createGlobalStyle} from "styled-components"

 export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
    body{
        position: absolute;
        height: 100%;
        width: 100%;
        color: #333;
        background: skyblue;
    }
    .App {
        background: skyblue;
        font-family: sans-serif;
        width: 100vw;
        height: 100vh;
        position: absolute;
        background-size: cover;
      }
      
      .container {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 1024px;
        margin: 0 auto;
        gap: 1rem;
      }
      
      .results-container {
        margin: 0;
      }
      
      @media only screen and (min-width: 768px) {
        .container {
          flex-direction: row;
        }
      
        .results-container {
          width: 90%;
          max-width: 600;
        }
      }
      
      @media only screen and (min-width: 1024px) {
        .map-container {
          width: 600px;
          margin: 0 auto 1rem auto;
        }
      }
      
      .search-container {
        margin-right: 1rem;
        min-width: 300px;
      }
      
      .logo {
        display: inline-block;
        color: #fff;
        font-family: "Coiny", cursive;
        font-size: 3rem;
        line-height: 3rem;
        text-decoration: underline;
      }
 `