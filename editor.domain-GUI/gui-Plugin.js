
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
        effect = $('#parametersName').val();
    if (typeof parameters === "undefined")
        parameters = $('#effectName').val();
    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

    var pddl = '';
    pddl += '(:predicate ' + predicate + '\n'
    pddl += '    :custom '+ custom + '\n'
    pddl += '    :parameters ('+parameters+')\n'
    pddl += '    :effect ( \n'
    pddl += '        ('+effect+')\n'
    pddl += '    )\n'
    pddl += ')\n'

    // eval(predicateName);

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {
        window.pddlInsertSettings.predicate.predicatename = $('#jsSetting').val();
        $('#pddlInsertModal').modal('toggle');
    }

}
/********************************************************************/

function pddlInsertCustom() {
    $('#pddlInsertModalLabel').text('Insert Customly Generated PDDL');

    var html = '';

    html += '<form class="form-horizontal">';

    html += '<div class="form-group">';
    html += '  <div class="col-sm-offset-2 col-sm-4"><pre>var pddl = \'\';</pre></div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="jsSetting" class="col-sm-2 control-label">Raw JavaScript</label>';
    html += '  <div class="input-group col-sm-8">';
    html += '    <textarea id="jsSetting" class="form-control" rows="13" placeholder="JavaScript will be \'eval\'d, and the variable pddl inserted."></textarea>';
    html += '  </div>';
    html += '</div>';

    html += '<button style="margin-left:26px" type="button" onclick="doPddlInsertCustom(); return false;" class="btn btn-primary btn-lg">Insert</button>';

    html += '</form>';

    $('#pddlInsertModalContent').html(html);

    $('#jsSetting').val(window.pddlInsertSettings.custom.js);

    $('#pddlInsertModal').modal('toggle');

}

function doPddlInsertCustom(rawjs, skipModalToggle) {

    if (typeof rawjs === "undefined")
        rawjs = $('#jsSetting').val();
    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

    var pddl = '';
    eval(rawjs);

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {
        window.pddlInsertSettings.custom.js = $('#jsSetting').val();
        $('#pddlInsertModal').modal('toggle');
    }

}

/********************************************************************/

function pddlInsertNetwork() {
    $('#pddlInsertModalLabel').text('Insert Network');

    var html = '';

    html += '<form class="form-horizontal">';

    html += '<div class="form-group">';
    html += '  <div class="col-sm-offset-2 col-sm-10">';
    html += '    <div class="checkbox">';
    html += '      <label><input id="networkTypeSetting" type="checkbox"> Directed</label>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="locPreSetting" class="col-sm-2 control-label">Location format</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="locPreSetting" value="loc">';
    html += '    <div class="input-group-addon">#</div>';
    html += '    <input type="text" class="form-control" id="locPostSetting" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="networkConnectionSetting" class="col-sm-2 control-label">Connection Predicate</label>';
    html += '  <div class="input-group col-sm-3">';
    html += '    <div class="input-group-addon">(</div>';
    html += '    <input type="text" class="form-control" id="networkConnectionSetting" value="link">';
    html += '    <div class="input-group-addon"> l1 l2)</div>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="adjacencySetting" class="col-sm-2 control-label">Adjacency List</label>';
    html += '  <div class="input-group col-sm-8">';
    html += '    <textarea id="adjacencySetting" class="form-control" rows="13" placeholder="Space separated location ids. Each line is a chain."></textarea>';
    html += '  </div>';
    html += '</div>';

    html += '<button style="margin-left:26px" type="button" onclick="doPddlInsertNetwork(); return false;" class="btn btn-primary btn-lg">Insert</button>';

    html += '</form>';

    $('#pddlInsertModalContent').html(html);

    $('#adjacencySetting').val(window.pddlInsertSettings.network.adj);
    $('#networkConnectionSetting').val(window.pddlInsertSettings.network.conn);
    $('#locPreSetting').val(window.pddlInsertSettings.network.lpre);
    $('#locPostSetting').val(window.pddlInsertSettings.network.lpos);
    $('#networkTypeSetting').prop('checked', window.pddlInsertSettings.network.directed);

    $('#pddlInsertModal').modal('toggle');

}

function doPddlInsertNetwork(directed, lpre, lpos, conPred, adjacencies, skipModalToggle) {

    if (typeof directed === "undefined")
        directed = $('#networkTypeSetting').is(':checked');
    if (typeof adjacencies === "undefined")
        adjacencies = $('#adjacencySetting').val();
    if (typeof conPred === "undefined")
        conPred = $('#networkConnectionSetting').val();
    if (typeof lpre === "undefined")
        lpre = $('#locPreSetting').val();
    if (typeof lpos === "undefined")
        lpos = $('#locPostSetting').val();
    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

    var pddl = '\n;; make sure these are constants or objects:\n;;';
    var pddl2 = '';

    var chains = adjacencies.split('\n');
    var objs = {}

    for (var i = 0; i < chains.length; i++) {
        nodes = chains[i].split(' ');
        for (var j = 0; j < nodes.length; j++) {
            var obj = lpre + nodes[j] + lpos;

            // Only show the objects once
            if (!(obj in objs)) {
                objs[obj] = true;
                pddl += ' ' + obj;
            }

            if (j < nodes.length - 1) {
                var obj2 = lpre + nodes[j+1] + lpos;
                pddl2 += '\n(' + conPred + ' ' + obj + ' ' + obj2 + ')';
                if (!directed)
                    pddl2 += '\n(' + conPred + ' ' + obj2 + ' ' + obj + ')';
            }
        }
    }

    pddl += pddl2;

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {
        window.pddlInsertSettings.network.adj = $('#adjacencySetting').val();
        window.pddlInsertSettings.network.conn = $('#networkConnectionSetting').val();
        window.pddlInsertSettings.network.lpre = $('#locPreSetting').val();
        window.pddlInsertSettings.network.lpos = $('#locPostSetting').val();
        window.pddlInsertSettings.network.directed = $('#networkTypeSetting').is(':checked');
        $('#pddlInsertModal').modal('toggle');
    }

}

/********************************************************************/

function pddlInsertGrid() {
    $('#pddlInsertModalLabel').text('Insert Grid of Locations');

    var html = '';

    html += '<form class="form-horizontal">';

    html += '<div class="form-group">';
    html += '  <div class="col-sm-offset-2 col-sm-10">';
    html += '    <div class="checkbox">';
    html += '      <label><input id="networkTypeSetting" type="checkbox"> Directed</label>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="gridTypeSplitSetting" class="col-sm-2 control-label">Grid Type</label>';
    html += '  <div class="input-group col-sm-5">';
    html += '    <label><input type="radio" name="inlineRadioOptions" id="gridTypeMonolithicSetting" value="monolithicGrid" checked> Monolithic Location Objects</label>';
    html += '    <label><input type="radio" name="inlineRadioOptions" id="gridTypeSplitSetting" value="splitGrid"> Decomposed Location Objects</label>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="xSizeSetting" class="col-sm-2 control-label">Grid Size</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="xSizeSetting" value="3">';
    html += '    <div class="input-group-addon">x</div>';
    html += '    <input type="text" class="form-control" id="ySizeSetting" value="4">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="locPreSetting" class="col-sm-2 control-label">Location format</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="locPreSetting" value="loc">';
    html += '    <div class="input-group-addon">#</div>';
    html += '    <input type="text" class="form-control" id="locPostSetting" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="gridConnectionSetting" class="col-sm-2 control-label">Connection Predicate</label>';
    html += '  <div class="input-group col-sm-3">';
    html += '    <div class="input-group-addon">(</div>';
    html += '    <input type="text" class="form-control" id="gridConnectionSetting" value="connected">';
    html += '    <div class="input-group-addon"> l1 l2)</div>';
    html += '  </div>';
    html += '</div>';

    html += '<button style="margin-left:26px" type="button" onclick="doPddlInsertGrid(); return false;" class="btn btn-primary btn-lg">Insert</button>';

    html += '</form>';

    $('#pddlInsertModalContent').html(html);

    $('#xSizeSetting').val(window.pddlInsertSettings.grid.xval);
    $('#ySizeSetting').val(window.pddlInsertSettings.grid.yval);
    $('#locPreSetting').val(window.pddlInsertSettings.grid.lpre);
    $('#locPostSetting').val(window.pddlInsertSettings.grid.lpos);
    $('#gridConnectionSetting').val(window.pddlInsertSettings.grid.conn);
    $('#gridTypeMonolithicSetting').prop('checked', window.pddlInsertSettings.grid.mono);
    $('#networkTypeSetting').prop('checked', window.pddlInsertSettings.network.directed);

    $('#pddlInsertModal').modal('toggle');

}

function doPddlInsertGrid(directed, xval, yval, lpre, lpos, monolithicGridType, conPred, skipModalToggle) {

    if (typeof directed === "undefined")
        directed = $('#networkTypeSetting').is(':checked');
    if (typeof xval === "undefined")
        xval = parseInt($('#xSizeSetting').val());
    if (typeof yval === "undefined")
        yval = parseInt($('#ySizeSetting').val());
    if (typeof lpre === "undefined")
        lpre = $('#locPreSetting').val();
    if (typeof lpos === "undefined")
        lpos = $('#locPostSetting').val();
    if (typeof monolithicGridType === "undefined")
        monolithicGridType = $('#gridTypeMonolithicSetting').is(':checked');
    if (typeof conPred === "undefined")
        conPred = $('#gridConnectionSetting').val();
    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

    var pddl = '\n';

    // Create the comment for the needed objects
    if (monolithicGridType) {
        pddl += ';; make sure these are constants or objects:\n;;';
        for (var i = 1; i <= xval; i++) {
            for (var j = 1; j <= yval; j++) {
                pddl += ' ' + lpre + i + '_' + j + lpos;
            }
        }
    } else {
        // If we split the grid, then we just need one successor relation
        doPddlInsertNumbers(1, Math.max(xval,yval), lpre, lpos, false, false, false, true);
    }

    // Create the connected relations
    pddl += '\n';
    for (var i = 1; i <= xval; i++) {
        for (var j = 1; j <= yval; j++) {
            var l1, l2, l3, l4;
            // All the points are drawn to the right except for the right-most column
            // Go right
            if (i < xval) {
                if (monolithicGridType) {
                    l1 = lpre + i + '_' + j + lpos;
                    l2 = lpre + (i+1) + '_' + j + lpos;
                    pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ')';
                } else {
                    l1 = lpre + i + lpos;
                    l2 = lpre + j + lpos;
                    l3 = lpre + (i+1) + lpos;
                    l4 = lpre + j + lpos;
                    pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ')';
                }
            }
            // All the points are drawn to the up except for the front-most row
            // Go up
            if (j < yval) {
                if (monolithicGridType) {
                    l1 = lpre + i + '_' + j + lpos;
                    l2 = lpre + i + '_' + (j+1) + lpos;
                    pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ')';
                } else {
                    l1 = lpre + i + lpos;
                    l2 = lpre + j + lpos;
                    l3 = lpre + i + lpos;
                    l4 = lpre + (j+1) + lpos;
                    pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ')';
                }
            }

            // When it is a directed graph, reverse and rebuild a line between 2 points
            if (directed) {
                // Go left
                if (i > 1) {
                    if (monolithicGridType) {
                        l1 = lpre + i + '_' + j + lpos;
                        l2 = lpre + (i-1) + '_' + j + lpos;
                        pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ')';
                    } else {
                        l1 = lpre + i + lpos;
                        l2 = lpre + j + lpos;
                        l3 = lpre + (i-1) + lpos;
                        l4 = lpre + j + lpos;
                        pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ')';
                    }
                }

                // Go down
                if (j > 1) {
                    if (monolithicGridType) {
                        l1 = lpre + i + '_' + j + lpos;
                        l2 = lpre + i + '_' + (j-1) + lpos;
                        pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ')';
                    } else {
                        l1 = lpre + i + lpos;
                        l2 = lpre + j + lpos;
                        l3 = lpre + i + lpos;
                        l4 = lpre + (j-1) + lpos;
                        pddl += '\n(' + conPred + ' ' + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ')';
                    }
                }
            }

        }
    }

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {
        window.pddlInsertSettings.grid.xval = $('#xSizeSetting').val();
        window.pddlInsertSettings.grid.yval = $('#ySizeSetting').val();
        window.pddlInsertSettings.grid.lpre = $('#locPreSetting').val();
        window.pddlInsertSettings.grid.lpos = $('#locPostSetting').val();
        window.pddlInsertSettings.grid.conn = $('#gridConnectionSetting').val();
        window.pddlInsertSettings.grid.mono = $('#gridTypeMonolithicSetting').is(':checked');
        window.pddlInsertSettings.network.directed = $('#networkTypeSetting').is(':checked');

        $('#pddlInsertModal').modal('toggle');
    }

}




/********************************************************************/

function pddlInsertNumbers() {
    $('#pddlInsertModalLabel').text('Insert Number System');

    var html = '';

    html += '<form class="form-horizontal">';

    html += '<div class="form-group">';
    html += '  <label for="minNumSetting" class="col-sm-2 control-label">Minimum number</label>';
    html += '  <div class="col-sm-2">';
    html += '    <input type="number" class="form-control" id="minNumSetting" value="1">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="maxNumSetting" class="col-sm-2 control-label">Maximum number</label>';
    html += '  <div class="col-sm-2">';
    html += '    <input type="number" class="form-control" id="maxNumSetting" value="10">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="numPreSetting" class="col-sm-2 control-label">Number format</label>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <input type="text" class="form-control" id="numPreSetting" value="n">';
    html += '    <div class="input-group-addon">#</div>';
    html += '    <input type="text" class="form-control" id="numPostSetting" value="">';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="useSuccSetting" class="col-sm-2 control-label">Generate successors</label>';
    html += '  <div class="col-sm-1"><input type="checkbox" id="useSuccSetting"></div>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <div class="input-group-addon">(</div>';
    html += '    <input type="text" class="form-control" id="succSetting" value="succ">';
    html += '    <div class="input-group-addon"> n1 n2)</div>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="usePredSetting" class="col-sm-2 control-label">Generate predecessors</label>';
    html += '  <div class="col-sm-1"><input type="checkbox" id="usePredSetting"></div>';
    html += '  <div class="input-group col-sm-2">';
    html += '    <div class="input-group-addon">(</div>';
    html += '    <input type="text" class="form-control" id="predSetting" value="pred">';
    html += '    <div class="input-group-addon"> n1 n2)</div>';
    html += '  </div>';
    html += '</div>';

    html += '<div class="form-group">';
    html += '  <label for="useSumSetting" class="col-sm-2 control-label">Generate sum</label>';
    html += '  <div class="col-sm-1"><input type="checkbox" id="useSumSetting"></div>';
    html += '  <div class="input-group col-sm-3">';
    html += '    <div class="input-group-addon">(</div>';
    html += '    <input type="text" class="form-control" id="sumSetting" value="sum">';
    html += '    <div class="input-group-addon"> n1 n2 {n1+n2})</div>';
    html += '  </div>';
    html += '</div>';

    html += '<button style="margin-left:26px" type="button" onclick="doPddlInsertNumbers(); return false;" class="btn btn-primary btn-lg">Insert</button>';

    html += '</form>';

    $('#pddlInsertModalContent').html(html);

    $('#minNumSetting').val(window.pddlInsertSettings.numbers.min);
    $('#maxNumSetting').val(window.pddlInsertSettings.numbers.max);
    $('#numPreSetting').val(window.pddlInsertSettings.numbers.npre);
    $('#numPostSetting').val(window.pddlInsertSettings.numbers.npos);
    $('#useSuccSetting').prop('checked', window.pddlInsertSettings.numbers.doSucc);
    $('#usePredSetting').prop('checked', window.pddlInsertSettings.numbers.doSucc);
    $('#useSumSetting').prop('checked', window.pddlInsertSettings.numbers.doSum);
    $('#succSetting').val(window.pddlInsertSettings.numbers.succ);
    $('#predSetting').val(window.pddlInsertSettings.numbers.pred);
    $('#sumSetting').val(window.pddlInsertSettings.numbers.sum);

    $('#pddlInsertModal').modal('toggle');

}

function doPddlInsertNumbers(min, max, npre, npos, doSucc, doPred, doSum, skipModalToggle) {

    if (typeof min === "undefined")
        min = parseInt($('#minNumSetting').val());
    if (typeof max === "undefined")
        max = parseInt($('#maxNumSetting').val());
    if (typeof npre === "undefined")
        npre = $('#numPreSetting').val();
    if (typeof npos === "undefined")
        npos = $('#numPostSetting').val();
    if (typeof doSucc === "undefined")
        doSucc = $('#useSuccSetting').is(':checked');
    if (typeof doPred === "undefined")
        doPred = $('#usePredSetting').is(':checked');
    if (typeof doSum === "undefined")
        doSum = $('#useSumSetting').is(':checked');
    if (typeof skipModalToggle === "undefined")
        skipModalToggle = false;

    var pddl = '\n';

    if (min > max) {
        window.toastr.error('Min should be less than max.');
        return;
    }

    pddl += ';; make sure these are constants or objects:\n;;';
    for (var i = min; i <= max; i++) {
        pddl += ' ' + npre + i + npos;
    }

    if (doSucc) {
        pddl += '\n';
        for (var i = min; i < max; i++) {
            var n1 = npre + i + npos;
            var n2 = npre + parseInt(i+1) + npos;
            pddl += '\n(' + $('#succSetting').val() + ' ' + n1 + ' ' + n2 + ')';
        }
    }

    if (doPred) {
        pddl += '\n';
        for (var i = min+1; i <= max; i++) {
            var n1 = npre + i + npos;
            var n2 = npre + parseInt(i-1) + npos;
            pddl += '\n(' + $('#predSetting').val() + ' ' + n1 + ' ' + n2 + ')';
        }
    }

    if (doSum) {
        pddl += '\n';
        for (var i = min; i <= max; i++) {
            for (var j = min; j <= max; j++) {
                if ((i+j) <= max) {
                    var n1 = npre + i + npos;
                    var n2 = npre + j + npos;
                    var n3 = npre + parseInt(i+j) + npos;
                    pddl += '\n(' + $('#sumSetting').val() + ' ' + n1 + ' ' + n2 + ' ' + n3 + ')';
                }
            }
        }
    }

    window.get_current_editor().insert(pddl);
    if (!skipModalToggle) {

        window.pddlInsertSettings.numbers.min = $('#minNumSetting').val();
        window.pddlInsertSettings.numbers.max = $('#maxNumSetting').val();
        window.pddlInsertSettings.numbers.npre = $('#numPreSetting').val();
        window.pddlInsertSettings.numbers.npos = $('#numPostSetting').val();
        window.pddlInsertSettings.numbers.doSucc = $('#useSuccSetting').is(':checked');
        window.pddlInsertSettings.numbers.doSucc = $('#usePredSetting').is(':checked');
        window.pddlInsertSettings.numbers.doSum = $('#useSumSetting').is(':checked');
        window.pddlInsertSettings.numbers.succ = $('#succSetting').val();
        window.pddlInsertSettings.numbers.pred = $('#predSetting').val();
        window.pddlInsertSettings.numbers.sum = $('#sumSetting').val();

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

        name: "Misc PDDL Generators",
        author: "Christian Muise and Nir Lipovetzky",
        email: "christian.muise@gmail.com,nirlipo@gmail.com",
        description: "Adds a number of utilities to the editor for generating PDDL.",

        initialize: function() {

            window.add_menu('&nbsp;Insert', 'pddlInsertMenu', 'glyphicon-log-in');

            if (!window.pddlInsertSetup) {


                window.add_menu_button('&nbsp;Predicate',
                                       'pddlInsertPredicateMenu',
                                       'glyphicon-sort-by-order',
                                       'pddlInsertPredicate()',
                                       'pddlInsertMenu');
                
                // window.add_menu_button('&nbsp;Numbers',
                //                        'pddlInsertNumbersMenu',
                //                        'glyphicon-sort-by-order',
                //                        'pddlInsertNumbers()',
                //                        'pddlInsertMenu');

                // window.add_menu_button('&nbsp;Visual',
                //                        'pddlInsertGridMenu',
                //                        'glyphicon-th',
                //                        'pddlInsertGrid()',
                //                        'pddlInsertMenu');

                // window.add_menu_button('&nbsp;Image',
                //                        'pddlInsertNetworMenu',
                //                        'glyphicon-road',
                //                        'pddlInsertNetwork()',
                //                        'pddlInsertMenu');

                // window.add_menu_button('&nbsp;Custom',
                //                        'pddlInsertCustomMenu',
                //                        'glyphicon-pencil',
                //                        'pddlInsertCustom()',
                //                        'pddlInsertMenu');

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