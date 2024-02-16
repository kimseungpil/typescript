interface SampleInterface {
    size: number;
    label: string;
}

function printLabel(labeledObj: SampleInterface) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);




