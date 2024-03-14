import styled from 'styled-components';

const StyledResume = styled.div`
  .resume__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .resume__cv-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: relative;
    width: 80%;
    max-width: 600px;
    height: 80%;
    overflow-y: auto;
  }

  .resume__close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .resume__iframe {
    width: 90%;
    height: 100%;
    border: none;
  }
`;
export default StyledResume;
