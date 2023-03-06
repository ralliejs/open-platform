import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0%,
  40%,
  100% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-20px);
  }
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  .loader-square {
    width: 10px;
    height: 10px;
    margin: 0 10px;
    background-color: gray;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .loader-square:nth-child(1) {
    animation-delay: -0.45s;
  }

  .loader-square:nth-child(2) {
    animation-delay: -0.3s;
  }

  .loader-square:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export const GlobalLoading = () => {
  return (
    <Loader>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
    </Loader>
  )
}
