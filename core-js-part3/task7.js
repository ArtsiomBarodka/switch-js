function demonstrateVariableScope() {
  let letVariableInsudeFunction = "letVariableInsudeFunction";
  var varVariableinsideFunction = "varVariableinsideFunction";

  if (true) {
    let letVariableInsudeBlock = "letVariableInsudeBlock";
    var varVariableinsideBlock = "varVariableinsideBlock";

    console.log(`Logging variables insdie block: ${letVariableInsudeFunction}`);
    console.log(`Logging variables insdie block: ${varVariableinsideFunction}`);
    console.log(`Logging variables insdie block: ${letVariableInsudeBlock}`);
    console.log(`Logging variables insdie block: ${varVariableinsideBlock}`);
  }

  console.log(
    `Logging variables insdie function: ${letVariableInsudeFunction}`
  );
  console.log(
    `Logging variables insdie function: ${varVariableinsideFunction}`
  );
  console.log(`Logging variables insdie function: ${varVariableinsideBlock}`);
  console.log(`Logging variables insdie function: ${letVariableInsudeBlock}`);
}

demonstrateVariableScope();
