var PDDL_INSERT_MODAL = "\
<div class=\"modal fade\" id=\"pddlInsertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"pddlInsertModalLabel\" aria-hidden=\"true\">\
  <div class=\"modal-dialog modal-lg\">\
    <div class=\"modal-content\">\
      <div class=\"modal-header\">\
        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\
        <h4 class=\"modal-title\" id=\"pddlInsertModalLabel\">Insert PDDL</h4>\
      </div>\
      <div id=\"apPddlInsertModalContent\" class=\"modal-body\">\
      </div>\
      <div class=\"modal-footer\">\
        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\
      </div>\
    </div>\
  </div>\
</div>\
";

/********************************************************************/
// Predicate
function pddlInsertPredicate() {
    $('#pddlInsertModalLabel').text('Insert Predicate');
    var html = '';

    html += '<form class="form-horizontal">';

    html += '<div class="form-group">';
    html += '  <label for="predicateName" class="col-sm-2 control-label">Predicate Name</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="predicateName" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="customName" class="col-sm-2 control-label">Custom Object Name</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="customName" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="parametersName" class="col-sm-2 control-label">Parameters</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="parametersName" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="effectName" class="col-sm-2 control-label">Effects</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="effectName" value="">';
    html += '  </div>';
    html += '</div>';


    html += '<button style="margin-left:26px" type="button" onclick="doPddlInsertPredicate(); return false;" class="btn btn-primary btn-lg">Insert</button>';
    html += '</form>';


    $('#apPddlInsertModalContent').html(html);

    $('#pddlInsertModal').modal('toggle');
}


function doPddlInsertPredicate(predicate, custom, parameters, effect, skipModalToggle) {

    if (typeof predicate === "undefined")
        predicate = $('#predicateName').val();
    if (typeof custom === "undefined")
        custom = $('#customName').val();
    if (typeof effect === "undefined")
        effect = $('#effectName').val();
    if (typeof parameters === "undefined")
        parameters = $('#parametersName').val();

    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

    var pddl = '';
    pddl += '    (:predicate ' + predicate + '\n'
    pddl += '        :custom '+ custom + '\n'
    pddl += '        :parameters ('+parameters+')\n'
    pddl += '        :effect ( \n'
    pddl += '            ('+effect+')\n'
    pddl += '        )\n'
    pddl += '    )\n'

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {
        $('#pddlInsertModal').modal('toggle');
    }

}

/******************************************************************/
// Visual
function pddlInsertVisual(){
    $('#pddlInsertModalLabel').text('Insert Visual');
    var html = '';

    html += '<form class="form-horizontal">';

    html += '<div class="form-group">';
    html += '  <label for="VisualObjectName" class="col-sm-2 control-label">Visual Object Name</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="VisualObjectName" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="typeName" class="col-sm-2 control-label">Type Name</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="typeName" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="prefabImageName" class="col-sm-2 control-label">prefabImage Name</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="prefabImageName" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="showNameVaule" class="col-sm-2 control-label">showName (boolean)</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="showNameVaule" value="TRUE">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="xValue" class="col-sm-2 control-label">x</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="number" class="form-control" id="xValue" value="0">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="yValue" class="col-sm-2 control-label">y</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="number" class="form-control" id="yValue" value="0">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="colorName" class="col-sm-2 control-label">color</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="colorName" value="RANDOMCOLOR">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="widthValue" class="col-sm-2 control-label">width</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="number" class="form-control" id="widthValue" value="80">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="heightValue" class="col-sm-2 control-label">height</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="number" class="form-control" id="heightValue" value="80">';
    html += '  </div>';
    html += '</div>';


    html += '<button style="margin-left:26px" type="button" onclick="doPddlInsertVisual(); return false;" class="btn btn-primary btn-lg">Insert</button>';
    html += '</form>';


    $('#apPddlInsertModalContent').html(html);

    $('#pddlInsertModal').modal('toggle');
}


function doPddlInsertVisual(visualObject,type,prefabImage,showName,x,y,color,width,height,skipModalToggle){
    if (typeof visualObject === "undefined")
        visualObject= $('#VisualObjectName').val();
    if (typeof type === "undefined")
        type = $('#typeName').val();
    if (typeof prefabImage === "undefined")
        prefabImage = $('#prefabImageName').val();
    if (typeof showName === "undefined")
        showName = $('#showNameVaule').val();
    if (typeof x === "undefined")
        x = $('#xValue').val();
    if (typeof y === "undefined")
        y = $('#yValue').val();
    if (typeof color === "undefined")
        color = $('#colorName').val();
    if (typeof width === "undefined")
        width = $('#widthValue').val();
    if (typeof height === "undefined")
        height = $('#heightValue').val();
    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

 

    var pddl = '';
    pddl += '    (:visual '+visualObject+'\n';
    pddl += '        :type '+type+'\n';
    pddl += '        :properties(\n';
    pddl += '            (prefabImage '+prefabImage+')\n';
    pddl += '            (showName '+showName+')\n';
    pddl += '            (x '+x+')\n';
    pddl += '            (y '+y+')\n';
    pddl += '            (color '+color+')\n';
    pddl += '            (width '+width+')\n';
    pddl += '            (height '+height+')\n';
    pddl += '        )\n';
    pddl += '    )\n';
    pddl += '\n';

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {
        $('#pddlInsertModal').modal('toggle');
    }
}


/******************************************************************/
// Image
function pddlInsertImage(){
    $('#pddlInsertModalLabel').text('Insert Image');
    var html = '';

    html += '<form class="form-horizontal">';

    html += '<div class="form-group">';
    html += '  <label for="imageName" class="col-sm-2 control-label">Image Name</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="imageName" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="imageEncoding" class="col-sm-2 control-label">Encoded Image</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="imageEncoding" value="">';
    html += '  </div>';
    html += '</div>';



    html += '<button style="margin-left:26px" type="button" onclick="doPddlInsertImage(); return false;" class="btn btn-primary btn-lg">Insert</button>';
    html += '</form>';


    $('#apPddlInsertModalContent').html(html);

    $('#pddlInsertModal').modal('toggle');
}

function doPddlInsertImage(imageName, imageEncoding, skipModalToggle){

    if (typeof imageName === "undefined")
        imageName= $('#imageName').val();
    if (typeof imageEncoding === "undefined")
        imageEncoding = $('#imageEncoding').val();
    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

    var pddl = '';
    pddl += '    (:image \n';
    pddl += '        ('+imageName+' '+imageEncoding+')\n';
    pddl += '    )\n';
    pddl += '\n';

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {
        $('#pddlInsertModal').modal('toggle');
    }


}


define(function () {

    //Do setup work here
    window.pddlInsertSetup = false;
    window.pddlInsertSettings = {
        predicate: {
            min: 1,
            max: 10,
            npre: 'n',
            npos: '',
            doSucc: true,
            doPred: false,
            doSum: false,
            succ: 'succ',
            pred: 'pred',
            sum: 'sum'
        },
        visual: {
            mono: true,
            xval: 3,
            yval: 4,
            lpre: 'loc',
            lpos: '',
            conn: 'connected'
        },
        image: {
            directed: false,
            lpre: 'loc',
            lpos: '',
            conn: 'link',
            adj: ''
        },
    }

    return {

        name: "Animation PDDL generator",
        author: "Nir Lipovetzky",
        email: "nir.lipovetzky@unimelb.edu.au",
        description: "An animation PDDL generator.",

        initialize: function() {

            // the default pddl for predicate
            var snippet = '';
            snippet += '  (:predicate ${1:predicateName}\n';
            snippet += '                :parameters (?obj)\n';
            snippet += '                :priority 0\n';
            snippet += '                :effect( ... )\n';
            snippet += '    )';
            snippet += ' \n';
            window.add_snippet(snippet, "predicate");
            
            // add code snippets for animation PDDL syntax
            var snippet = '';
            snippet += '(define (animation domainName)\n';
            snippet += '\n';
            snippet += '\n';           
            snippet += '  ; Specifies visual effects when predicate becomes true in state\n';
            snippet += '  ;\n';
            snippet += '  ; Objects properties: \n';
            snippet += '  ;     (x) and (y) as integer coordinates or null value; \n';
            snippet += '  ;     (color) as a hexadecimal RGB value pre-specified colour constant or random color; \n';
            snippet += '  ;     (width) and (height) of the object; (prefabImage) as a base64 string of the object’s image\n';
            snippet += '  ;     (depth) of the object in the canvas;\n';
            snippet += '  ;     a boolean flag (showname) to specify whether to display the object’ name; \n';
            snippet += '  ;     and an optional label string to substitute the default name of the object in the canvas.\n';
            snippet += '  ;\n';
            snippet += '  ; special visual constraints can be used using (assign ) in the effects section of a predicate\n';
            snippet += '  ; See http://tinyurl.com/yxlt96fp for an example in editor.planning.domains\n';
            snippet += '  ; Documentation: https://github.com/planimation/documentation\n';
            snippet += ' \n';
            snippet += '   (:predicate predicateName\n';
            snippet += '                  :parameters ( ?obj )\n';
            snippet += '                  ; Using a custom visual object not refered in the parameters of the predcate \n';
            snippet += '                  :custom customObjName\n';
            snippet += '                  :effect(\n';
            snippet += '                  (equal (?obj x) (10))\n';
            snippet += '                  (equal (customObjName y) (add (?obj y) (10)) )\n';
            snippet += '                  )\n';
            snippet += '   )\n';
            snippet += '  \n';
            snippet += ' \n';
            snippet += '   ; Default Visual Object applied to all objects (default object)\n';
            snippet += '   (:visual DefaultVisualObjectName\n';
            snippet += '               :type default\n';
            snippet += '               :properties(\n';
            snippet += '                 (prefabImage img1)\n';
            snippet += '                 (showName TRUE)\n';
            snippet += '                 (x Null)\n';
            snippet += '                 (y Null)\n';
            snippet += '                 (color RANDOMCOLOR)\n';
            snippet += '                 (width 80)\n';
            snippet += '                 (height 80)\n';
            snippet += '               )\n';
            snippet += '   )\n';
            snippet += '  \n';
            snippet += '  ; Custom object representing the claw\n';
            snippet += '   (:visual customVisualObjName\n';
            snippet += '               :type custom\n';
            snippet += '               :objects ObjName1 ObjName2\n';
            snippet += '               :properties(\n';
            snippet += '                 (prefabImage img2)\n';
            snippet += '                 (showName FALSE)\n';
            snippet += '                 (x 300)\n';
            snippet += '                 (y 300)\n';
            snippet += '                 (color BLACK)\n';
            snippet += '                 (width 80)\n';
            snippet += '                 (height 40)\n';
            snippet += '                 (depth 1)\n';
            snippet += '                )\n';
            snippet += '   )\n';
            snippet += ' \n';
            snippet += ' \n';
            snippet += '   ; Use https://www.base64encode.org/#encodefiles to encode images in base64\n';
            snippet += '   (:image \n';
            snippet += '         (img1 iVBORw0KGgoAAAANSUhEUgAAAXEAAAFxCAIAAAAK5Q/zAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXxaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOC0xMlQxMjoxOTo1MSsxMDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDgtMTVUMjA6MzY6NDgrMTA6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDgtMTVUMjA6MzY6NDgrMTA6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MGRmODdjNy1lN2YxLTQ5NmMtYjE1Yy1kYjIzNDAxNDQxZWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlOWI4NTQtNDJlYy00ODE3LTgxNWQtMzY0YjAxMTRiODQ3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlOWI4NTQtNDJlYy00ODE3LTgxNWQtMzY0YjAxMTRiODQ3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYmU5Yjg1NC00MmVjLTQ4MTctODE1ZC0zNjRiMDExNGI4NDciIHN0RXZ0OndoZW49IjIwMTgtMDgtMTJUMTI6MTk6NTErMTA6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MGRmODdjNy1lN2YxLTQ5NmMtYjE1Yy1kYjIzNDAxNDQxZWMiIHN0RXZ0OndoZW49IjIwMTgtMDgtMTVUMjA6MzY6NDgrMTA6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppcsu5QAAASfSURBVHic7dTBCQAgEMAwdf+dzyUKgiQT9NU9Mwsgcl4HAF/xFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoeQpQ8hSg5ClAyVOAkqcAJU8BSp4ClDwFKHkKUPIUoOQpQMlTgJKnACVPAUqeApQ8BSh5ClDyFKDkKUDJU4CSpwAlTwFKngKUPAUoXWSoBd9t2wfhAAAAAElFTkSuQmCC)\n';
            snippet += '         (img2 iVBORw0KGgoAAAANSUhEUgAAAEoAAABUCAYAAAAlDKGaAAABdklEQVR4Xu3cPU7DQBhF0cnKYGfAzsLO0Efl/IBuEzQox1WKJySOb1yNc1quJHBKK6O1G9TLWuv1cF/Oa63PHe7TblBva633A8x8/gB1KwAqVgEKVBSIM0WBigJxpihQUSDOFAUqCsSZokBFgThTFKgoEGeKAhUF4kxRoKJAnCkKVBSIM0WBigJxpihQUSDOFAUqCsSZokBFgThTFKgoEGeKAhUF4kxRoKJAnCkKVBSIs62LmlO4x5O48X96yGzrU8HXd/EhAv/9j87x6TmiPFiuXwQGSlEhkXtFzZsC88bAs1/z3J5n5vd1D2reFDi+PfCsYBePJFA/ZwAqfkVAgYoCcaYoUFEgzhQFKgrEmaJARYE4UxSoKBBnigIVBeJMUaCiQJwpClQUiDNFgYoCcaYoUFEgzhQFKgrEmaJARYE4UxSoKBBnigIVBeJMUaCiQJwpClQUiDNFgYoCcXZT1PWbC3Mi2Kngq/P3u/2eebzZfzK7KOoLP13HqksMK+sAAAAASUVORK5CYII=)\n';
            snippet += '   )\n';
            snippet += ' )\n';
            window.add_snippet(snippet, "animation");

            // The default pddl for visual object
            var snippet = '';
            snippet += '   ; visual defines the objects represented on the screen\n';
            snippet += '   ; visual properties:\n';
            snippet += '   ; showname (Boolean): whether to display the object’s name on screen\n';
            snippet += '   ; x (Integer), y (Integer): x, y position of the object on screen\n';
            snippet += '   ; colour (Colour): Colour of the object. Can be a constant (eg BLACK), an RGB value (eg #FAA2B5), or the custom value RANDOMCOLOR which picks a random RGB value.\n';
            snippet += '   ; width (Integer), height (Integer): Width, height of the object on screen\n';
            snippet += '   ; depth: Depth of the object on screen. Higher depth objects are drawn behind lower depths.\n';
            snippet += '   ; label: Optional attribute specifying a string label to be drawn on the object.\n';
            snippet += '   ; Default Visual Object applied to all objects (default object)\n';
            snippet += ' \n';
            snippet += '   (:visual DefaultVisualObjectName\n';
            snippet += '               :type default\n';
            snippet += '               :properties(\n';
            snippet += '                 (prefabImage imgName)\n';
            snippet += '                 (showName TRUE)\n';
            snippet += '                 (x Null)\n';
            snippet += '                 (y Null)\n';
            snippet += '                 (color RANDOMCOLOR)\n';
            snippet += '                 (width 80)\n';
            snippet += '                 (height 80)\n';
            snippet += '               )\n';
            snippet += '    )\n';
            snippet += '  \n';
            window.add_snippet(snippet, "visual");

            var snippet = '';
            snippet += '   ; Default Visual Object applied to all objects (default object)\n';
            snippet += '   (:visual DefaultVisualObjectName\n';
            snippet += '               :type default\n';
            snippet += '               :properties(\n';
            snippet += '                 (prefabImage imgName)\n';
            snippet += '                 (showName TRUE)\n';
            snippet += '                 (x Null)\n';
            snippet += '                 (y Null)\n';
            snippet += '                 (color RANDOMCOLOR)\n';
            snippet += '                 (width 80)\n';
            snippet += '                 (height 80)\n';
            snippet += '               )\n';
            snippet += '    )\n';
            snippet += '  \n';
            window.add_snippet(snippet, "visual default");

            var snippet = '';
            snippet += '  ;Custom visual object\n';
            snippet += '   (:visual customVisualObjName\n';
            snippet += '               :type custom\n';
            snippet += '               :objects ObjName1 ObjName2\n';
            snippet += '               :properties(\n';
            snippet += '                 (prefabImage img2)\n';
            snippet += '                 (showName FALSE)\n';
            snippet += '                 (x 300)\n';
            snippet += '                 (y 300)\n';
            snippet += '                 (color BLACK)\n';
            snippet += '                 (width 80)\n';
            snippet += '                 (height 40)\n';
            snippet += '                 (depth 1)\n';
            snippet += '                )\n';
            snippet += '   )\n';
            snippet += ' \n';
            window.add_snippet(snippet, "visual custom");
		
	        var snippet = '';
            snippet += '   ; All images need to be Base64 string represented. Base64 images can be generated at https://www.base64decode.org/\n';
            snippet += '   (image \n';
            snippet += '         (imgName imgPath)\n';
            snippet += '    )\n';
            snippet += '  \n';
            window.add_snippet(snippet, "image");

            var snippet = '';
            snippet += 'function distributex (objects ?x) (settings (spacebtwn ...))';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            var snippet = '';
            snippet += 'function distributey (objects ?y) (settings (spacebtwn ...))';
            snippet += '  \n';
            window.add_snippet(snippet, "function");

            var snippet = '';
            snippet += 'function distribute_grid_around_point (objects ?x) (settings (spacebtwn ...))';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            var snippet = '';
            snippet += 'function distribute_within_objects_vertical (objects ?x ?y) (settings (spacebtwn ...))';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            var snippet = '';
            snippet += 'function distribute_within_objects_horizontal (objects ?obj ?loc)';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            var snippet = '';
            snippet += 'function distribute_within_objects_horizontal (objects ?obj ?loc)';
            snippet += '  \n';
            window.add_snippet(snippet, "function");

            var snippet = '';
            snippet += 'function calculate_label (objects ?obj1 ?obj2)';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            var snippet = '';
            snippet += 'function align_middle (objects ?x ?y)';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            var snippet = '';
            snippet += 'function apply_smaller (objects ?x ?y) (settings (increase_width ...))';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            var snippet = '';
            snippet += 'function draw_line (objects ?x ?y)';
            snippet += '  \n';
            window.add_snippet(snippet, "function");
        
            window.add_menu('&nbsp;apInsert', 'apPddlInsertMenu', 'glyphicon-log-in');

            if (!window.pddlInsertSetup) {


                window.add_menu_button('&nbsp;Predicate',
                                       'pddlInsertPredicateMenu',
                                       'glyphicon-align-left',
                                       'pddlInsertPredicate()',
                                       'apPddlInsertMenu');
                window.add_menu_button('&nbsp;Visual',
                                       'pddlInsertPredicateMenu',
                                       'glyphicon-eye-open',
                                       'pddlInsertVisual()',
                                       'apPddlInsertMenu');
                window.add_menu_button('&nbsp;Image',
                                       'pddlInsertPredicateMenu',
                                       'glyphicon-picture',
                                       'pddlInsertImage()',
                                       'apPddlInsertMenu');
                
                $('body').append(PDDL_INSERT_MODAL);
                window.pddlInsertSetup = true;
            }

            
        },

        disable: function() {
            // This is called whenever the plugin is disabled
            window.remove_menu_button('apPddlInsertMenu');
            window.pddlInsertSetup = false;
            
        },

        save: function() {
            // Used to save the plugin settings for later
            return window.pddlInsertSettings;
        },

        load: function(settings) {
            // Restore the plugin settings from a previous save call
            window.pddlInsertSettings = settings;
        }

    };
});