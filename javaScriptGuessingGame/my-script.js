//this is a placeholder script that is meant to be stored in toonBoom
function createDrawingNodes()
{
    var selectedNodes = selection.NumberOfNodesSelected();

    if (selectedNodes == 1){
        for (var n = 0; n < selectedNodes; n++){
            var currentNode = selection.selectedNode(n);
            var posX = node.coordX(currentNode);
            var posY = node.coordY(currentNode);
            for(var i = 0; i < 4; i++){
                var newNode = node.add(node.parentNode(currentNode), "drawing_" + (i + 1), "READ", posX + (120 * i), posY + 100, 0);
            }
        }
    } else {
        MessageBox.information("You must select only ONE composite node!");
    }
}