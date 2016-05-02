var rows = prompt("How many rows do you want in your circle?", "Enter a number"),
	natl = prompt("Do you use UK or US terminology?").toLowerCase(),
	st, ch;

if (natl === "uk") {
	st = prompt("Will you be using htr or tr?");
	if (st === "htr") {
		ch = 2;
	} else if (st === "tr") {
		ch = 3;
	}
} else if (natl === "us") {
	st = prompt("Will you be using hdc or dc?");
	if (st === "hdc") {
		ch = 2;
	} else if (st === "dc") {
		ch = 3;
	}
}


function circleMaker(rows) {
	var instructions = [];
	for (var row = 1; row <= rows; ++row) {

		// start the circle
		if (row === 1) {
			instructions += "Row 1:\nTie a slip knot\nch 4\nJoin with sl st\n\n";
		}

		// rows 2 & 3
		if (row === 2) {
			instructions += "Row 2:\nch " + ch + "\n" + st + " 11 into ring\nJoin with sl st\n\n";
			instructions += "Row 3:\nch " + ch + "\n" + "Starting with next stitch, " + st + " twice into each stich for 23 stitches\nJoin with sl st\n\n";
			++row;
		}

		//rows 4+
		if (row > 3) {

			// set total number of stitches this row
			var total = (row - 1) * 12 - 1;

			// set stitch pattern
			ringRatio = [];
			ringRatio.length = row - 2;
			for (var ratioCount = 0; ratioCount < ringRatio.length; ++ratioCount) {
				ringRatio[ratioCount] = st + " 1";
			}
			ringRatio[ringRatio.length - 2] = st + " 2";
			ratioString = ringRatio.join(", ");

			// add pattern to instructions
			//for (var post = 0; post < ringRatio.length; ++post) {
				instructions += "Row " + row + ":\nch " + ch; //print step number and 1st step
				instructions += "\nStarting with the next stitch, " + ratioString + " for " + total + " stitches\nJoin with sl st\n\n";
			//}
		}
	}
	return instructions;
}

console.log(circleMaker(rows));
