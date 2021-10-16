function parseCount(value) {
    const parsed = Number.parseInt(value, 10);
    if (isNaN(parsed)){
    throw new "Невалидное значение";
    }

return parsed;

}

