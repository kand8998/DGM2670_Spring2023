//this is a placeholder script that is meant to be stored in toonBoom
function createDrawingNodes()
{
	var selectedNodes = selection.numberOfNodesSelected(); // create variable to store number of nodes selected
	if(selectedNodes == 1) { // check if one node is selected
		scene.beginUndoRedoAccum("Create Drawing Nodes");//set undo 
        for(var n = 0; n < selectedNodes; n++) { // loop through all nodes selected
			var currentNode = selection.selectedNode(n); // the current selected node in the loop
			var posX = node.coordX(currentNode); // get the X position on the node graph
			var posY = node.coordY(currentNode); // get the Y position on the node graph
			for(var i = 0; i < 4; i++){
				var newNode =  node.add(node.parentNode(currentNode), "drawing_" + (i + 1), "READ", posX + (120 * i), posY + 100, 0);
				node.link(newNode, 0, currentNode, 0);
			}
			}
            scene.endUndoRedoAccum();//set undo
	} else { // if more than one node is selected run the following
		MessageBox.information("You must select only ONE composite node!"); // displays warning message
	}
}