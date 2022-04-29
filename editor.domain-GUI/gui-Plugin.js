
var PDDL_INSERT_MODAL = "\
<div class=\"modal fade\" id=\"pddlInsertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"pddlInsertModalLabel\" aria-hidden=\"true\">\
  <div class=\"modal-dialog modal-lg\">\
    <div class=\"modal-content\">\
      <div class=\"modal-header\">\
        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\
        <h4 class=\"modal-title\" id=\"pddlInsertModalLabel\">Insert PDDL</h4>\
      </div>\
      <div id=\"pddlInsertModalContent\" class=\"modal-body\">\
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


    $('#pddlInsertModalContent').html(html);

    $('#pddlInsertModal').modal('toggle');
}


function doPddlInsertPredicate(predicate, custom, parameters, effect, skipModalToggle) {

    if (typeof predicate === "undefined")
        predicate= $('#predicateName').val();
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


    $('#pddlInsertModalContent').html(html);

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


    $('#pddlInsertModalContent').html(html);

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


/********************************************************************/
define(function () {

    window.pddlInsertSetup = false;
    window.pddlInsertSettings = {
        numbers: {
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
        grid: {
            mono: true,
            xval: 3,
            yval: 4,
            lpre: 'loc',
            lpos: '',
            conn: 'connected'
        },
        network: {
            directed: false,
            lpre: 'loc',
            lpos: '',
            conn: 'link',
            adj: ''
        },
        custom: {
            js: ''
        }
    }

    return {

        name: "PDDL Generators",
        author: "Christian Muise and Nir Lipovetzky",
        email: "christian.muise@gmail.com,nirlipo@gmail.com",
        description: "Adds a number of utilities to the editor for generating PDDL.",

        initialize: function() {

            window.add_menu('&nbsp;Insert', 'pddlInsertMenu', 'glyphicon-log-in');

            if (!window.pddlInsertSetup) {


                window.add_menu_button('&nbsp;Predicate',
                                       'pddlInsertPredicateMenu',
                                       'glyphicon-align-left',
                                       'pddlInsertPredicate()',
                                       'pddlInsertMenu');
                window.add_menu_button('&nbsp;Visual',
                                       'pddlInsertPredicateMenu',
                                       'glyphicon-eye-open',
                                       'pddlInsertVisual()',
                                       'pddlInsertMenu');
                window.add_menu_button('&nbsp;Image',
                                       'pddlInsertPredicateMenu',
                                       'glyphicon-picture',
                                       'pddlInsertImage()',
                                       'pddlInsertMenu');
                
                $('body').append(PDDL_INSERT_MODAL);
                window.pddlInsertSetup = true;
            }
        },

        disable: function() {
            window.remove_menu_button('pddlInsertMenu');
        },

        save: function() {
            return window.pddlInsertSettings;
        },

        load: function(settings) {
            window.pddlInsertSettings = settings;
        }

    };
});