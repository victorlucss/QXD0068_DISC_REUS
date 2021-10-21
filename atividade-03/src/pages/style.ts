import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 5px;

  input {
    width: 280px;
    margin: 8px 0;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    height: 32px;
    padding: 0 10px;
    background: white;
    border: 2px solid #1EB97C;
  }

  button {
    border-radius: 5px;
    border: transparent;
    cursor: pointer;
    height: 32px;
    padding: 0 20px;
    color: white;
    width: 120px;
    font-size: 16px;
    font-weight: bold;
    background: #29DC95;
    transition: 0.2s linear;
    margin-left: 16px;

    &:hover {
      background: #1EB97C;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background: #F7F7F8;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;
  width: 100%;

  span {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  img {
    border-radius: 6px;
  }

`

export const Observers = styled.div`
  width: 100%;
  height: 100vh;
  margin-left: 40px;
  gap: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`