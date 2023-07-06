function factorial(n) {
  if (n == 0) return 1;
  let i = 0;
  let result = 1;
  while(i < n){
    result *= (n - i);
    i++;
  }
  return result;
}
