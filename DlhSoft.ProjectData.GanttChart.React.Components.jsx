function GanttChartView(props) {
    var id, idc = 0; do { id = "ganttChartView" + new Date().getTime() + idc++; } while (document.getElementById(id));
    var element = <div id={id} style={props.style}> {props.children}</div>;
    var changeHandler = props.settings.itemPropertyChangeHandler;
    setTimeout(function() {
        DlhSoft.Controls.GanttChartView.initialize(document.getElementById(id), props.items, props.settings, props.license);
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

function ScheduleChartView(props) {
    var id, idc = 0; do { id = "scheduleChartView" + new Date().getTime() + idc++; } while (document.getElementById(id));
    var element = <div id={id} style={props.style}> {props.children}</div>;
    var changeHandler = props.settings.itemPropertyChangeHandler;
    setTimeout(function() {
        DlhSoft.Controls.ScheduleChartView.initialize(document.getElementById(id), props.items, props.settings, props.license);
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

function LoadChartView(props) {
    var id, idc = 0; do { id = "loadChartView" + new Date().getTime() + idc++; } while (document.getElementById(id));
    var element = <div id={id} style={props.style}> {props.children}</div>;
    var changeHandler = props.settings.itemPropertyChangeHandler;
    setTimeout(function() {
        DlhSoft.Controls.LoadChartView.initialize(document.getElementById(id), props.items, props.settings, props.license);
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
