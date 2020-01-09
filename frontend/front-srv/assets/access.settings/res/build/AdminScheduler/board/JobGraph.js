'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x7, _x8, _x9) { var _again = true; _function: while (_again) { var object = _x7, property = _x8, receiver = _x9; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x7 = parent; _x8 = property; _x9 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _pydioUtilDom = require('pydio/util/dom');

var _pydioUtilDom2 = _interopRequireDefault(_pydioUtilDom);

var _pydioHttpResourcesManager = require('pydio/http/resources-manager');

var _pydioHttpResourcesManager2 = _interopRequireDefault(_pydioHttpResourcesManager);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _jointjs = require('jointjs');

var _graphJobInput = require('./graph/JobInput');

var _graphJobInput2 = _interopRequireDefault(_graphJobInput);

var _graphFilter = require("./graph/Filter");

var _graphFilter2 = _interopRequireDefault(_graphFilter);

var _graphLink = require("./graph/Link");

var _graphLink2 = _interopRequireDefault(_graphLink);

var _graphAction = require("./graph/Action");

var _graphAction2 = _interopRequireDefault(_graphAction);

var _dagre = require('dagre');

var _dagre2 = _interopRequireDefault(_dagre);

var _graphlib = require('graphlib');

var _graphlib2 = _interopRequireDefault(_graphlib);

var _graphSelector = require("./graph/Selector");

var _graphSelector2 = _interopRequireDefault(_graphSelector);

var _materialUi = require('material-ui');

var _builderFormPanel = require("./builder/FormPanel");

var _builderFormPanel2 = _interopRequireDefault(_builderFormPanel);

var _builderTriggers = require("./builder/Triggers");

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actionsEditor = require("./actions/editor");

var _builderFilters = require("./builder/Filters");

var _builderFilters2 = _interopRequireDefault(_builderFilters);

var _graphTemplates = require("./graph/Templates");

var _graphTemplates2 = _interopRequireDefault(_graphTemplates);

var _graphConfigs = require("./graph/Configs");

var _builderStyles = require("./builder/styles");

var _Pydio$requireLib = _pydio2['default'].requireLib('hoc');

var ModernTextField = _Pydio$requireLib.ModernTextField;

var mapStateToProps = function mapStateToProps(state) {
    console.debug(state);
    return _extends({}, state);
};

var editWindowHeight = 600;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onToggleEdit: function onToggleEdit() {
            var on = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
            var layout = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

            dispatch((0, _actionsEditor.toggleEditAction)(on, layout));
        },
        onSetDirty: function onSetDirty() {
            var dirty = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

            dispatch((0, _actionsEditor.setDirtyAction)(dirty));
        },
        onPaperBind: function onPaperBind(element, graph, events) {
            dispatch((0, _actionsEditor.bindPaperAction)(element, graph, events));
        },
        onPaperResize: function onPaperResize(width, height) {
            dispatch((0, _actionsEditor.resizePaperAction)(width, height));
        },
        onEmptyModel: function onEmptyModel(model) {
            dispatch((0, _actionsEditor.emptyModelAction)(model));
        },
        onAttachModel: function onAttachModel(link) {
            dispatch(function (d) {
                d((0, _actionsEditor.attachModelAction)(link));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onDetachModel: function onDetachModel(linkView, toolView, originalTarget) {
            dispatch(function (d) {
                d((0, _actionsEditor.detachModelAction)(linkView, toolView, originalTarget));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onRemoveModel: function onRemoveModel(model, parentModel) {
            dispatch(function (d) {
                d((0, _actionsEditor.removeModelAction)(model, parentModel));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onDropFilter: function onDropFilter(target, dropped, filterOrSelector, objectType) {
            dispatch(function (d) {
                d((0, _actionsEditor.dropFilterAction)(target, dropped, filterOrSelector, objectType));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onRemoveFilter: function onRemoveFilter(target, filter, filterOrSelector, objectType) {
            dispatch(function (d) {
                d((0, _actionsEditor.removeFilterAction)(target, filter, filterOrSelector, objectType));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onTriggerChange: function onTriggerChange(triggerType, triggerData) {
            dispatch(function (d) {
                d((0, _actionsEditor.changeTriggerAction)(triggerType, triggerData));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onLabelChange: function onLabelChange(newLabel) {
            dispatch(function (d) {
                d((0, _actionsEditor.updateLabelAction)(newLabel));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onJobPropertyChange: function onJobPropertyChange(name, value) {
            dispatch(function (d) {
                d((0, _actionsEditor.updateJobPropertyAction)(name, value));
                d((0, _actionsEditor.setDirtyAction)(true));
            });
        },
        onSelectionClear: function onSelectionClear() {
            dispatch((0, _actionsEditor.clearSelectionAction)());
        },
        onSelectionSet: function onSelectionSet(type, model) {
            dispatch((0, _actionsEditor.setSelectionAction)(type, model));
        },
        onRevert: function onRevert(original, callback) {
            dispatch(function (d, getState) {
                d((0, _actionsEditor.revertAction)(original));
                d((0, _actionsEditor.setDirtyAction)(false));

                var _getState = getState();

                var job = _getState.job;

                callback(job);
            });
        },
        onSave: function onSave(job) {
            var onJobSave = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            dispatch(function (d) {
                _pydioHttpResourcesManager2['default'].loadClass('EnterpriseSDK').then(function (sdk) {
                    var SchedulerServiceApi = sdk.SchedulerServiceApi;
                    var JobsPutJobRequest = sdk.JobsPutJobRequest;

                    var api = new SchedulerServiceApi(_pydioHttpApi2['default'].getRestClient());
                    var req = new JobsPutJobRequest();
                    // Clone and remove tasks
                    req.Job = _pydioHttpRestApi.JobsJob.constructFromObject(JSON.parse(JSON.stringify(job)));
                    if (req.Job.Tasks !== undefined) {
                        delete req.Job.Tasks;
                    }
                    return api.putJob(req);
                }).then(function () {
                    d((0, _actionsEditor.saveSuccessAction)(job));
                    if (onJobSave) {
                        onJobSave(job);
                    }
                })['catch'](function (e) {
                    d((0, _actionsEditor.saveErrorAction)(job));
                });
            });
        }
    };
};

function storeStateToState(store) {
    return _extends({}, mapStateToProps(store.getState()), mapDispatchToProps(store.dispatch));
}

var JobGraph = (function (_React$Component) {
    _inherits(JobGraph, _React$Component);

    function JobGraph(props) {
        var _this2 = this;

        _classCallCheck(this, JobGraph);

        _get(Object.getPrototypeOf(JobGraph.prototype), 'constructor', this).call(this, props);
        var job = _pydioHttpRestApi.JobsJob.constructFromObject(JSON.parse(JSON.stringify(props.job)));
        var original = _pydioHttpRestApi.JobsJob.constructFromObject(JSON.parse(JSON.stringify(props.job)));
        this.store = (0, _redux.createStore)(_reducers2['default'], { job: job, original: original }, (0, _redux.applyMiddleware)(_reduxThunk2['default']));
        this.state = storeStateToState(this.store);
        this.store.subscribe(function () {
            _this2.setState(storeStateToState(_this2.store));
        });
    }

    //JobGraph = connect(mapStateToProps, mapDispatchToProps)(JobGraph);

    _createClass(JobGraph, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.loadDescriptions();
            this.boundingRef = _reactDom2['default'].findDOMNode(this.refs.boundingBox);
            this._resizer = function () {
                var _state = _this3.state;
                var editMode = _state.editMode;
                var paper = _state.paper;

                if (editMode && _this3.boundingRef) {
                    var graphWidth = paper.model.getBBox().width + 80;
                    var paperHeight = paper.getArea().height;
                    var maxWidth = _this3.boundingRef.clientWidth;
                    paper.setDimensions(Math.max(graphWidth, maxWidth), paperHeight);
                }
            };
            _pydioUtilDom2['default'].observeWindowResize(this._resizer);
            window.setTimeout(function () {
                var create = _this3.props.create;

                if (create) {
                    _this3.toggleEdit();
                }
            }, 500);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _pydioUtilDom2['default'].stopObservingWindowResize(this._resizer);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.random === this.props.random;
        }
    }, {
        key: 'loadDescriptions',
        value: function loadDescriptions() {
            var _this4 = this;

            var api = new _pydioHttpRestApi.ConfigServiceApi(_pydioHttpApi2['default'].getRestClient());
            api.schedulerActionsDiscovery().then(function (data) {
                _this4.setState({ descriptions: data.Actions }, function () {
                    _this4.graphFromJob(_this4.state.job);
                    _this4.drawGraph();
                });
            })['catch'](function () {
                _this4.graphFromJob(_this4.state.job);
                _this4.drawGraph();
            });
        }
    }, {
        key: 'chainActions',
        value: function chainActions(graph, actions, inputId) {
            var _this5 = this;

            var hasData = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
            var descriptions = this.state.descriptions;

            actions.forEach(function (action) {
                var crtInput = inputId;
                var hasChain = action.ChainedActions && action.ChainedActions.length;
                var shape = new _graphAction2['default'](descriptions, action, hasChain);
                shape.addTo(graph);
                var link = new _graphLink2['default'](crtInput, 'output', shape.id, 'input', hasData);
                link.addTo(graph);
                if (hasChain) {
                    _this5.chainActions(graph, action.ChainedActions, shape.id);
                }
            });
        }
    }, {
        key: 'graphFromJob',
        value: function graphFromJob(job) {
            var graph = this.state.graph;

            graph.getCells().filter(function (c) {
                return !c.isTemplate;
            }).forEach(function (c) {
                return c.remove();
            });

            var shapeIn = new _graphJobInput2['default'](job);
            shapeIn.addTo(graph);

            if (!job || !job.Actions || !job.Actions.length) {
                return;
            }

            var actionsInput = shapeIn.id;
            var firstLinkHasData = JobGraph.jobInputCreatesData(job);

            this.chainActions(graph, job.Actions, actionsInput, firstLinkHasData);
        }
    }, {
        key: 'reLayout',
        value: function reLayout(editMode) {
            var _this6 = this;

            var _state2 = this.state;
            var graph = _state2.graph;
            var paper = _state2.paper;
            var onPaperResize = _state2.onPaperResize;

            // Relayout graph and return bounding box
            // Find JobInput and apply graph on this one ?
            var inputs = graph.getCells().filter(function (c) {
                return !c.isTemplate;
            });
            var bbox = _jointjs.layout.DirectedGraph.layout(inputs, {
                nodeSep: 48,
                edgeSep: 48,
                rankSep: 128,
                rankDir: "LR",
                marginX: editMode ? 160 : 32,
                marginY: 32,
                dagre: _dagre2['default'],
                graphlib: _graphlib2['default']
            });
            bbox.width += 80;
            bbox.height += 80;
            if (editMode) {
                bbox.height = Math.max(editWindowHeight, bbox.height);
                bbox.width += 200;
                if (this.boundingRef) {
                    var maxWidth = this.boundingRef.clientWidth;
                    bbox.width = Math.max(bbox.width, maxWidth);
                }
            }
            if (paper) {
                paper.setDimensions(bbox.width, bbox.height);
                graph.getLinks().forEach(function (l) {
                    var linkView = l.findView(paper);
                    if (!linkView.hasTools()) {
                        linkView.addTools(new _jointjs.dia.ToolsView({ tools: [_this6.createLinkTool()] }));
                        if (!editMode) {
                            linkView.hideTools();
                        }
                    }
                });
            } else {
                onPaperResize(bbox.width, bbox.height);
            }
            this.setState({ bbox: bbox });
        }
    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];
            var graph = this.state.graph;

            graph.getCells().filter(function (c) {
                return c.clearSelection;
            }).forEach(function (c) {
                return c.clearSelection();
            });
            this.setState({
                selectionType: null,
                selectionModel: null,
                fPanelWidthOffset: 0
            }, callback);
        }
    }, {
        key: 'select',
        value: function select(model) {
            var s = {
                selectionModel: model
            };
            if (model instanceof _graphAction2['default']) {
                s.createNewAction = false;
                s.selectionType = 'action';
            } else if (model instanceof _graphSelector2['default']) {
                s.selectionType = 'selector';
            } else if (model instanceof _graphFilter2['default']) {
                s.selectionType = 'filter';
            } else if (model instanceof _graphJobInput2['default']) {
                s.createNewAction = false;
                s.selectionType = 'trigger';
            }
            this.setState(s);
        }
    }, {
        key: 'insertOutput',
        value: function insertOutput(source, toInsert) {
            var graph = this.state.graph;

            var outLinks = graph.getConnectedLinks(source).filter(function (link) {
                return link.getSourceCell() === source;
            });
            var link = new _graphLink2['default'](source.id, 'output', toInsert.id, 'input', true);
            link.addTo(graph);
            outLinks.forEach(function (link) {
                link.source({ id: toInsert.id, port: 'output' });
            });
        }
    }, {
        key: 'insertInput',
        value: function insertInput(target, toInsert) {
            var graph = this.state.graph;

            // retarget existing links
            graph.getConnectedLinks(target).filter(function (link) {
                return link.getTargetCell() === target;
            }).forEach(function (link) {
                link.target({ id: toInsert.id, port: 'input' });
            });
            var link = new _graphLink2['default'](toInsert.id, 'output', target.id, 'input');
            link.addTo(graph);
        }
    }, {
        key: 'clearHighlight',
        value: function clearHighlight() {
            var _state3 = this.state;
            var graph = _state3.graph;
            var paper = _state3.paper;

            graph.getCells().forEach(function (c) {
                c.findView(paper).unhighlight();
                if (c.hideLegend) {
                    c.hideLegend();
                }
            });
        }
    }, {
        key: 'createLinkTool',
        value: function createLinkTool() {
            var onDetachModel = this.state.onDetachModel;

            return new _jointjs.linkTools.Remove({
                action: function action(evt, linkView, toolView) {
                    onDetachModel(linkView, toolView);
                },
                distance: -40
            });
        }
    }, {
        key: 'drawGraph',
        value: function drawGraph() {
            var _this7 = this;

            var _state4 = this.state;
            var graph = _state4.graph;
            var job = _state4.job;
            var onPaperBind = _state4.onPaperBind;
            var onAttachModel = _state4.onAttachModel;
            var onDetachModel = _state4.onDetachModel;
            var onDropFilter = _state4.onDropFilter;
            var editMode = _state4.editMode;

            var removeLinkTool = function removeLinkTool() {
                return _this7.createLinkTool();
            };
            var _this = this;

            var templates = new _graphTemplates2['default'](graph);
            templates.addTo(graph);

            onPaperBind(_reactDom2['default'].findDOMNode(this.refs.placeholder), graph, {
                'element:pointerdown': function elementPointerdown(elementView, event) {
                    event.data = elementView.model.position();
                    var model = elementView.model;

                    if (_this.state.editMode && !model.isTemplate) {
                        if (model instanceof _graphAction2['default'] || model instanceof _graphSelector2['default'] || model instanceof _graphFilter2['default'] || model instanceof _graphJobInput2['default']) {
                            _this7.clearSelection();
                            model.select();
                            _this7.select(model);
                        }
                    } else if (model.isTemplate && model !== templates) {
                        // Start dragging new model and duplicate
                        templates.replicate(model, graph);
                        model.toFront();
                    }
                },
                'element:filter:pointerdown': function elementFilterPointerdown(elementView, event) {
                    var model = elementView.model;

                    if (_this.state.editMode) {
                        _this7.clearSelection();
                        model.selectFilter();
                        if (model instanceof _graphJobInput2['default']) {
                            _this7.setState({ selectionModel: job, selectionType: 'filter' });
                        } else if (model instanceof _graphAction2['default']) {
                            _this7.setState({ selectionModel: model.getJobsAction(), selectionType: 'filter' });
                        }
                        event.stopPropagation();
                    }
                },
                'element:selector:pointerdown': function elementSelectorPointerdown(elementView, event) {
                    var model = elementView.model;

                    if (_this.state.editMode) {
                        _this7.clearSelection();
                        model.selectSelector();
                        if (model instanceof _graphJobInput2['default']) {
                            _this7.setState({ selectionModel: job, selectionType: 'selector' });
                        } else if (model instanceof _graphAction2['default']) {
                            _this7.setState({ selectionModel: model.getJobsAction(), selectionType: 'selector' });
                        }
                        event.stopPropagation();
                    }
                },
                'element:nomove': function elementNomove(elementView, event) {
                    event.stopPropagation();
                },
                'element:pointerup': function elementPointerup(elementView, evt, x, y) {
                    var elementAbove = elementView.model;
                    var isFilter = elementAbove instanceof _graphFilter2['default'] || elementAbove instanceof _graphSelector2['default'];
                    _this.clearHighlight();
                    var coordinates = new _jointjs.g.Point(x, y);
                    var elementBelow = this.model.findModelsFromPoint(coordinates).find(function (el) {
                        return el.id !== elementAbove.id;
                    });
                    // If the two elements are connected already, don't
                    // connect them again (this is application-specific though).
                    if (isFilter && elementBelow && graph.getNeighbors(elementBelow).indexOf(elementAbove) === -1) {
                        // Move the element to the position before dragging.
                        // elementAbove.position(evt.data.x, evt.data.y);
                        if (_this.isDroppable(elementAbove, elementBelow)) {
                            if (elementAbove instanceof _graphFilter2['default']) {
                                if (elementBelow instanceof _graphJobInput2['default']) {
                                    onDropFilter(job, elementAbove.getFilter(), 'filter', elementAbove.getFilterType());
                                    _this.clearSelection(function () {
                                        _this.setState({ selectionModel: job, selectionType: 'filter' });
                                    });
                                } else if (elementBelow instanceof _graphAction2['default']) {
                                    onDropFilter(elementBelow.getJobsAction(), elementAbove.getFilter(), 'filter', elementAbove.getFilterType());
                                    _this.clearSelection(function () {
                                        _this.setState({ selectionModel: elementBelow.getJobsAction(), selectionType: 'filter' });
                                    });
                                }
                                elementBelow.selectFilter();
                            } else {
                                if (elementBelow instanceof _graphJobInput2['default']) {
                                    onDropFilter(job, elementAbove.getSelector(), 'selector', elementAbove.getSelectorType());
                                    _this.clearSelection(function () {
                                        _this.setState({ selectionModel: job, selectionType: 'selector' });
                                    });
                                } else if (elementBelow instanceof _graphAction2['default']) {
                                    onDropFilter(elementBelow.getJobsAction(), elementAbove.getSelector(), 'selector', elementAbove.getSelectorType());
                                    _this.clearSelection(function () {
                                        _this.setState({ selectionModel: elementBelow.getJobsAction(), selectionType: 'selector' });
                                    });
                                }
                                elementBelow.selectSelector();
                            }

                            elementAbove.remove();
                            return;
                        } else {
                            _this.clearHighlight();
                        }
                    }
                    if (isFilter && elementAbove.isTemplate) {
                        elementAbove.remove();
                    }
                },
                'element:pointermove': function elementPointermove(elementView, evt, x, y) {
                    var elementAbove = elementView.model;
                    var isFilter = elementAbove instanceof _graphFilter2['default'] || elementAbove instanceof _graphSelector2['default'];
                    _this.clearHighlight();
                    var coordinates = new _jointjs.g.Point(x, y);
                    var elementBelow = this.model.findModelsFromPoint(coordinates).find(function (el) {
                        return el.id !== elementAbove.id;
                    });
                    // If the two elements are connected already, don't
                    // connect them again (this is application-specific though).
                    if (isFilter && elementBelow && graph.getNeighbors(elementBelow).indexOf(elementAbove) === -1) {
                        if (_this.isDroppable(elementAbove, elementBelow)) {
                            elementBelow.findView(this).highlight();
                        }
                    }
                },
                'link:connect': function linkConnect(linkView, event) {
                    linkView.addTools(new _jointjs.dia.ToolsView({ tools: [removeLinkTool()] }));
                    linkView.model.attr((0, _graphConfigs.linkAttr)(JobGraph.jobInputCreatesData(job)));
                    linkView.model.attr('.link-tool/display', 'none');
                    onAttachModel(linkView);
                },
                'link:disconnect': function linkDisconnect(linkView, event, elementView) {
                    //console.log('disconnect => remove linkView from original', elementView);
                    onDetachModel(linkView, null, elementView);
                },
                'link:remove': removeLinkTool,
                'button:create-action': function buttonCreateAction(elView, evt) {
                    evt.stopPropagation();
                    _this7.clearSelection();
                    _this7.setState({ createNewAction: true });
                },
                'button:reflow': function buttonReflow(elView, evt) {
                    evt.stopPropagation();
                    _this7.reLayout(_this7.state.editMode);
                }
            });
            this.reLayout(editMode);
        }
    }, {
        key: 'isDroppable',
        value: function isDroppable(elementAbove, elementBelow) {
            if (!(elementBelow instanceof _graphJobInput2['default'] || elementBelow instanceof _graphAction2['default'])) {
                return false;
            }
            var job = this.state.job;

            var dropFromType = elementAbove instanceof _graphFilter2['default'] ? "filter" : "selector";
            var dropOn = elementBelow instanceof _graphJobInput2['default'] ? "job" : "action";
            var dropFromProto = elementAbove instanceof _graphFilter2['default'] ? elementAbove.getFilter() : elementAbove.getSelector();
            var dropOnProto = elementBelow instanceof _graphAction2['default'] ? elementBelow.getJobsAction() : job;
            var keySet = _graphConfigs.AllowedKeys.target[dropOn][dropFromType].filter(function (o) {
                return dropFromProto instanceof o.type;
            });
            if (!keySet.length) {
                return false;
            }
            // Check if the targetProto already has a similar key
            var targetKey = keySet[0].key;
            if (dropOnProto[targetKey]) {
                if (elementBelow.showLegend) {
                    elementBelow.showLegend('Already has ' + targetKey);
                }
                return false;
            }
            // Finally do not add filters on non-event based JobInput
            if (dropFromType === 'filter' && dropOn === 'job' && job.EventNames === undefined) {
                if (elementBelow.showLegend) {
                    elementBelow.showLegend('Cannot add filter on non event-based trigger');
                }
                return false;
            }
            return true;
        }
    }, {
        key: 'deleteAction',
        value: function deleteAction() {
            if (!window.confirm('Do you want to delete this action?')) {
                return;
            }
            var _state5 = this.state;
            var selectionModel = _state5.selectionModel;
            var paper = _state5.paper;
            var graph = _state5.graph;
            var onRemoveModel = _state5.onRemoveModel;

            var parentModel = undefined;
            graph.getConnectedLinks(selectionModel).forEach(function (link) {
                var linkView = link.findView(paper);
                if (linkView.targetView.model === selectionModel) {
                    parentModel = linkView.sourceView.model;
                }
            });
            onRemoveModel(selectionModel, parentModel);
            this.clearSelection();
        }
    }, {
        key: 'toggleEdit',
        value: function toggleEdit() {
            var _state6 = this.state;
            var onToggleEdit = _state6.onToggleEdit;
            var editMode = _state6.editMode;

            this.clearSelection();
            onToggleEdit(!editMode, this.reLayout.bind(this));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            var selBlock = undefined;
            var _props = this.props;
            var jobsEditable = _props.jobsEditable;
            var create = _props.create;
            var _state7 = this.state;
            var onEmptyModel = _state7.onEmptyModel;
            var editMode = _state7.editMode;
            var bbox = _state7.bbox;
            var selectionType = _state7.selectionType;
            var descriptions = _state7.descriptions;
            var selectionModel = _state7.selectionModel;
            var onTriggerChange = _state7.onTriggerChange;
            var onLabelChange = _state7.onLabelChange;
            var onJobPropertyChange = _state7.onJobPropertyChange;
            var createNewAction = _state7.createNewAction;
            var onRemoveFilter = _state7.onRemoveFilter;
            var dirty = _state7.dirty;
            var onSetDirty = _state7.onSetDirty;
            var onRevert = _state7.onRevert;
            var onSave = _state7.onSave;
            var original = _state7.original;
            var job = _state7.job;

            var fPanelWidthOffset = this.state.fPanelWidthOffset || 0;

            var blockProps = { onDismiss: function onDismiss() {
                    _this8.clearSelection();
                } };
            var rightWidth = 300;
            var showOffsetButton = undefined;
            if (createNewAction) {
                showOffsetButton = true;
                selBlock = _react2['default'].createElement(_builderFormPanel2['default'], {
                    actions: descriptions,
                    action: _pydioHttpRestApi.JobsAction.constructFromObject({ ID: _actionsEditor.JOB_ACTION_EMPTY }),
                    onChange: function (newAction) {
                        onEmptyModel(new _graphAction2['default'](descriptions, newAction, true));
                        _this8.reLayout(true);
                    },
                    create: true,
                    onDismiss: function () {
                        _this8.setState({ createNewAction: false, fPanelWidthOffset: 0 });
                    }
                });
            } else if (selectionModel) {
                if (selectionType === 'action') {
                    (function () {
                        showOffsetButton = true;
                        var action = selectionModel.getJobsAction();
                        selBlock = _react2['default'].createElement(_builderFormPanel2['default'], _extends({
                            actions: descriptions,
                            actionInfo: descriptions[action.ID],
                            action: action }, blockProps, {
                            onRemove: function () {
                                _this8.deleteAction();
                            },
                            onChange: function (newAction) {
                                action.Parameters = newAction.Parameters;
                                selectionModel.notifyJobModel(action);
                                onSetDirty(true);
                            }
                        }));
                    })();
                } else if (selectionType === 'selector' || selectionType === 'filter') {
                    rightWidth = 600;
                    if (selectionModel instanceof _pydioHttpRestApi.JobsJob) {
                        selBlock = _react2['default'].createElement(_builderFilters2['default'], _extends({ job: selectionModel, type: selectionType }, blockProps, { onRemoveFilter: onRemoveFilter, onSave: function () {
                                onSetDirty(true);
                            } }));
                    } else {
                        selBlock = _react2['default'].createElement(_builderFilters2['default'], _extends({ action: selectionModel, type: selectionType }, blockProps, { onRemoveFilter: onRemoveFilter, onSave: function () {
                                onSetDirty(true);
                            } }));
                    }
                } else if (selectionType === 'trigger') {
                    var _job = this.state.job;

                    selBlock = _react2['default'].createElement(_builderTriggers.Triggers, _extends({ job: _job }, blockProps, { onChange: onTriggerChange }));
                }
            }

            var st = {
                header: {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: editMode ? '#424242' : 'whitesmoke',
                    borderBottom: '1px solid #e0e0e0',
                    height: 48,
                    color: editMode ? '#eeeeee' : '#9e9e9e',
                    fontSize: 12,
                    fontWeight: 500,
                    paddingRight: 12
                },
                icon: {
                    color: editMode ? '#eeeeee' : '#9e9e9e'
                },
                disabled: {
                    color: 'rgba(255,255,255,0.3)'
                }
            };

            var header = _react2['default'].createElement(
                'span',
                { style: { flex: 1, padding: '14px 24px' } },
                'Job Workflow'
            );
            var footer = undefined;
            if (jobsEditable && editMode) {
                header = _react2['default'].createElement(
                    'span',
                    { style: { flex: 1, padding: '0 6px' } },
                    _react2['default'].createElement(ModernTextField, { value: job.Label, onChange: function (e, v) {
                            onLabelChange(v);
                        }, inputStyle: { color: 'white' } })
                );
                footer = _react2['default'].createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderTop: '1px solid #e0e0e0' } },
                    _react2['default'].createElement(
                        'div',
                        { style: { display: 'flex', alignItems: 'center', padding: '0 16px' } },
                        'Max. Parallel Tasks : ',
                        _react2['default'].createElement(ModernTextField, { style: { width: 60 }, value: job.MaxConcurrency, onChange: function (e, v) {
                                onJobPropertyChange('MaxConcurrency', parseInt(v));
                            }, type: "number" })
                    ),
                    _react2['default'].createElement(_materialUi.Checkbox, { style: { width: 200 }, checked: job.AutoStart, onCheck: function (e, v) {
                            onJobPropertyChange('AutoStart', v);
                        }, label: "Run-On-Save" }),
                    _react2['default'].createElement('span', { style: { flex: 1 } })
                );
            }

            return _react2['default'].createElement(
                _materialUi.Paper,
                { zDepth: 1, style: { margin: 20 } },
                _react2['default'].createElement(
                    'div',
                    { style: st.header },
                    header,
                    jobsEditable && dirty && _react2['default'].createElement(_materialUi.IconButton, { onTouchTap: function () {
                            onSave(job, _this8.props.onJobSave);
                        }, tooltip: 'Save', iconClassName: "mdi mdi-content-save", iconStyle: st.icon }),
                    jobsEditable && dirty && _react2['default'].createElement(_materialUi.IconButton, { onTouchTap: function () {
                            onRevert(original, function (j) {
                                _this8.graphFromJob(j);_this8.reLayout(editMode);
                            });
                        }, tooltip: 'Revert', iconClassName: "mdi mdi-undo", iconStyle: st.icon }),
                    jobsEditable && _react2['default'].createElement(_materialUi.IconButton, { onTouchTap: function () {
                            _this8.toggleEdit();
                        }, tooltip: editMode ? 'Close' : 'Edit', iconClassName: editMode ? "mdi mdi-close" : "mdi mdi-pencil", iconStyle: st.icon })
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { position: 'relative', display: 'flex', minHeight: editMode ? editWindowHeight : null }, ref: "boundingBox" },
                    _react2['default'].createElement(
                        'div',
                        { style: { flex: 1, overflowX: 'auto' }, ref: 'scroller' },
                        _react2['default'].createElement('div', { id: 'playground', ref: 'placeholder' })
                    ),
                    _react2['default'].createElement(
                        _materialUi.Paper,
                        { zDepth: 0, style: { width: selBlock ? rightWidth + fPanelWidthOffset : 0, height: bbox ? bbox.height : editWindowHeight, position: 'relative' } },
                        selBlock,
                        showOffsetButton && fPanelWidthOffset === 0 && _react2['default'].createElement('span', { className: "mdi mdi-chevron-left right-panel-expand-button", onClick: function () {
                                _this8.setState({ fPanelWidthOffset: 300 });
                            } }),
                        showOffsetButton && fPanelWidthOffset === 300 && _react2['default'].createElement('span', { className: "mdi mdi-chevron-right right-panel-expand-button", onClick: function () {
                                _this8.setState({ fPanelWidthOffset: 0 });
                            } })
                    )
                ),
                footer,
                (0, _builderStyles.getCssStyle)(editMode)
            );
        }
    }], [{
        key: 'jobInputCreatesData',
        value: function jobInputCreatesData(job) {
            return job.EventNames !== undefined || !!job.IdmSelector || !!job.NodesSelector || !!job.UsersSelector;
        }
    }]);

    return JobGraph;
})(_react2['default'].Component);

exports['default'] = JobGraph;
module.exports = exports['default'];
