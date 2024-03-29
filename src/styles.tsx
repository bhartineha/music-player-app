import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    .oi { 
        box-shadow: 0px 0px 7px #c3c1c1;
        height: 86vh;
        width: 25%;
      }

    .divSongs {
    height: 75vh;
    position: fixed; 
    overflow-y: scroll;
    z-index: 1;
    ::-webkit-scrollbar {
        width: 15px;    
      }
      
    ::-webkit-scrollbar-track {
          
      }
      
    ::-webkit-scrollbar-thumb {
        background-color: #c3c1c1;                
      }
    }

    .title {
        margin: 10px 10px;
        font-size: 20px;
        color: #16171a;   
    }
    .showSidebar {
      border: none;
      outline: none;
      background-color: transparent;
      position: absolute;
      z-index: 2;
      left: 2px;
      top: 20px;
      cursor: pointer;
    }

    .top {
        width: 100%;
        box-shadow: 4px 1px 7px #c3c1c1;
        padding: 20px;
        input {
          border: solid 1px gray;
          outline: none;
          background-color: #fff;
          border-radius: 10px; 
          margin: 15px 0px 30px 10px;
          height: 31px;
          width: 40%;
          color: #000;
          font-size: 18px;
          padding: 5px;
        }
        .searchH1 {
          margin-left: 12px;
          font-size: 16px;
        }
        .title {
          margin: 10px 10px;
          text-align: center; 
      } 
    }
      
    @media only screen and (max-width: 820px) {
      .top {
        height: 86vh;
        
        .title {
          margin: 10px 10px;
          text-align: center; 
      }        
      .divSongs {
        width: 100vw;
        position: relative;
        right: -5px;
      }
      input {
        margin-left: 13%;
        width: 250px;
      }
    }
`;

export const Music = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 10px;
`;