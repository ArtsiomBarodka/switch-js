function logged(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const returnValue = originalMethod.apply(this, args);
    console.log(`Method ${propertyName} called with arguments:`, args);
    console.log(`Method ${propertyName} returned:`, returnValue);
    return returnValue;
  };

  return descriptor;
}

class Calculator {
  @logged
  add(x: number, y: number): number {
    return x + y;
  }
}

let calc = new Calculator();
calc.add(4, 5);
calc.add(6, 7);
