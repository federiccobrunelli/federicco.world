import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .Main, .mainBreakTime, .time, .time_m, .breakTimeInput, .breakTime_s, 
  .Reset  {
    color: ${({ theme }) => theme.color};
  }

  .Reset{
    border: ${({ theme }) => theme.border}; 
  }

  .Start{
    background-color: ${({ theme }) => theme.background_color}; 
    color: ${({ theme }) => theme.start_color}; 
  }

  .Session, .BreakInput {
    border: ${({ theme }) => theme.session_border};
  }

  .sessionGoal, .breakTitle{
    color: ${({ theme }) => theme.color};
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: ${({ theme }) => theme.circular};
    stroke-linecap: round;
  }


  `
