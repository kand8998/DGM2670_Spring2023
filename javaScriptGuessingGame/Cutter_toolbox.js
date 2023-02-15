function test() // tests ability to print variables and get information
{
    var selectedNodes = selection.numberOfNodesSelected(); // stores selected nodes #
    var num = 2; // tests variable printing
    MessageLog.trace(selectedNodes);
    var node1posX = node.coordX(currentNode); // establish x coordinate (node 1)
    var node1posY = node.coordY(currentNode); //establish y coordinate (node 1)

    if(selectedNodes == 2) { // check for two nodes
         for (n = 0; n < selectedNodes; n++){
            var currentNode = selection.selectedNode(n);
            // var currentNodeType = node.type[currentNode];
            MessageLog.trace(currentNode.type());
             if (n == 0){

            } else {
            
            }
            var posX = node.coordX(currentNode); 
            var posY = node.coordY(currentNode); 
        }

    } else { // else warning for if you don't have two nodes selected
        MessageBox.information("Must have two nodes selected");
         // var cutterNode = node.add("", "cutter", "CUTTER",);
    }
}