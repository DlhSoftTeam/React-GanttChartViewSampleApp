function PertChartView(props) {
    var id, idc = 0; do { id = "pertChartView" + new Date().getTime() + idc++; } while (document.getElementById(id));
    var element = <div id={id} style={props.style}> {props.children}</div>;
    var changeHandler = props.settings.itemPropertyChangeHandler;
    setTimeout(function() {
        DlhSoft.Controls.Pert.PertChartView.initialize(document.getElementById(id), props.items, props.settings, props.license);
        if (props.change) {
            props.settings.itemPropertyChangeHandler = function(item, propertyName, isDirect, isFinal) {
                if (changeHandler)
                    changeHandler(item, propertyName, isDirect, isFinal);
                props.change(item, propertyName, isDirect, isFinal);
            }
        }
    });
    return element;
}

function NetworkDiagramView(props) {
    var id, idc = 0; do { id = "networkDiagramView" + new Date().getTime() + idc++; } while (document.getElementById(id));
    var element = <div id={id} style={props.style}> {props.children}</div>;
    var changeHandler = props.settings.itemPropertyChangeHandler;
    setTimeout(function() {
        DlhSoft.Controls.Pert.NetworkDiagramView.initialize(document.getElementById(id), props.items, props.settings, props.license);
        if (props.change) {
            props.settings.itemPropertyChangeHandler = function(item, propertyName, isDirect, isFinal) {
                if (changeHandler)
                    changeHandler(item, propertyName, isDirect, isFinal);
                props.change(item, propertyName, isDirect, isFinal);
            }
        }
    });
    return element;
}
