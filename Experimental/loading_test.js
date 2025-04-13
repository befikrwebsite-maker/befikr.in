/*

// HTML: <div class="loader"></div> 
.loader {
    width: 50px;
    height: 28px;
    --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
    background:
      var(--_g) 50%  0,
      var(--_g) 100% 0;
    background-size: 12px 12px;
    position: relative;
    animation: l23-0 1.5s linear infinite;
  }
  .loader:before {
    content: "";
    position: absolute;
    height: 12px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #000;
    left:0;
    top:0;
    animation: 
      l23-1 1.5s linear infinite,
      l23-2 0.5s cubic-bezier(0,200,.8,200) infinite;
  }
  @keyframes l23-0 {
    0%,31%  {background-position: 50% 0   ,100% 0}
    33%     {background-position: 50% 100%,100% 0}
    43%,64% {background-position: 50% 0   ,100% 0}
    66%     {background-position: 50% 0   ,100% 100%}
    79%     {background-position: 50% 0   ,100% 0}
    100%    {transform:translateX(calc(-100%/3))}
  }
  @keyframes l23-1 {
    100% {left:calc(100% + 7px)}
  }
  @keyframes l23-2 {
    100% {top:-0.1px}
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  // HTML: <div class="loader"></div> 
.loader {
    --s: 64px;
    width: var(--s);
    aspect-ratio: 2;
    --_g: #000 90%,#0000;
    background: 
      radial-gradient(farthest-side,var(--_g)) 0   50%/25% 50%,
      radial-gradient(farthest-side at bottom,var(--_g)) 50%  calc(50% - var(--s)/16)/25% 25%,
      radial-gradient(farthest-side at top   ,var(--_g)) 50%  calc(50% + var(--s)/16)/25% 25%,
      radial-gradient(farthest-side at bottom,var(--_g)) 100% calc(50% - var(--s)/16)/25% 25%,
      radial-gradient(farthest-side at top   ,var(--_g)) 100% calc(50% + var(--s)/16)/25% 25%;
    background-repeat: no-repeat;
    animation: l14 1s infinite;
  }
  @keyframes l14 {
      25%  {background-position:0    50%,50% 0,50% 100%,100% 0,100% 100%}
      50%  {background-position:100% 50%,0   0,0   100%,50%  0,50%  100%}
      75%,
      100% {background-position:100% 50%,0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% calc(50% - var(--s)/16),50% calc(50% + var(--s)/16)}
  }

  */