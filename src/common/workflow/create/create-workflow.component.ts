import { Component, AfterViewInit } from "@angular/core";

declare var kendo: any;

/** @title Implicit main content with two sidenavs */
@Component({
  selector: "create-workflow",
  templateUrl: "create-workflow.component.html",
  styleUrls: ["create-workflow.component.css"]
})
export class CreateWorkflowComponent implements AfterViewInit {
  ngAfterViewInit() {
    kendo.jQuery(function() {
      var Shape = kendo.dataviz.diagram.Shape,
        Connection = kendo.dataviz.diagram.Connection,
        Rect = kendo.dataviz.diagram.Rect,
        Point = kendo.dataviz.diagram.Point,
        selected;

    //   kendo.jQuery("#canvasProperties").on("change", canvasPropertiesChange);

    //   var layoutMapping = {
    //     TreeDown: {
    //       type: "tree",
    //       subtype: "down"
    //     },
    //     TreeUp: {
    //       type: "tree",
    //       subtype: "up"
    //     },
    //     TreeLeft: {
    //       type: "tree",
    //       subtype: "left"
    //     },
    //     TreeRight: {
    //       type: "tree",
    //       subtype: "right"
    //     },
    //     RadialTree: {
    //       type: "tree",
    //       subtype: "radial"
    //     },
    //     TipOverTree: {
    //       type: "tree",
    //       subtype: "typeover"
    //     },
    //     LayeredHorizontal: {
    //       type: "layered",
    //       subtype: "horizontal"
    //     },
    //     LayeredVertical: {
    //       type: "layered",
    //       subtype: "vertial"
    //     },
    //     ForceDirected: {
    //       type: "force",
    //       subtype: "directed"
    //     },
    //     MindmapVertical: {
    //       type: "tree",
    //       subtype: "mindmapvertical"
    //     },
    //     MindmapHorizontal: {
    //       type: "tree",
    //       subtype: "mindmaphorizontal"
    //     }
    //   };

    //   function canvasPropertiesChange() {
    //     diagram.element.css(
    //       "background-color",
    //       kendo
    //         .jQuery("#canvasBackgroundColorPicker")
    //         .getKendoColorPicker()
    //         .value()
    //     );

    //     var layout =
    //       layoutMapping[
    //         kendo
    //           .jQuery("#canvasLayout")
    //           .getKendoDropDownList()
    //           .value()
    //       ];

    //     diagram.layout({
    //       type: layout.type,
    //       subtype: layout.subtype,
    //       animation: true
    //     });
    //   }

    //   kendo.jQuery("#shapeProperties").on("change", shapePropertiesChange);

    //   function shapePropertiesChange() {
    //     var elements = selected || [],
    //       options = {
    //         fill: kendo
    //           .jQuery("#shapeBackgroundColorPicker")
    //           .getKendoColorPicker()
    //           .value(),
    //         stroke: {
    //           color: kendo
    //             .jQuery("#shapeStrokeColorPicker")
    //             .getKendoColorPicker()
    //             .value(),
    //           width: kendo
    //             .jQuery("#shapeStrokeWidth")
    //             .getKendoNumericTextBox()
    //             .value()
    //         }
    //       },
    //       bounds = new Rect(
    //         kendo
    //           .jQuery("#shapePositionX")
    //           .getKendoNumericTextBox()
    //           .value(),
    //         kendo
    //           .jQuery("#shapePositionY")
    //           .getKendoNumericTextBox()
    //           .value(),
    //         kendo
    //           .jQuery("#shapeWidth")
    //           .getKendoNumericTextBox()
    //           .value(),
    //         kendo
    //           .jQuery("#shapeHeight")
    //           .getKendoNumericTextBox()
    //           .value()
    //       ),
    //       element,
    //       i;

    //     for (i = 0; i < elements.length; i++) {
    //       element = elements[i];
    //       if (element instanceof Shape) {
    //         element.redraw(options);

    //         element.bounds(bounds);
    //       }
    //     }
    //   }

    //   function connectionPropertiesChange() {
    //     var elements = selected || [],
    //       options = {
    //         startCap: kendo
    //           .jQuery("#connectionStartCap")
    //           .getKendoDropDownList()
    //           .value(),
    //         endCap: kendo
    //           .jQuery("#connectionEndCap")
    //           .getKendoDropDownList()
    //           .value()
    //       },
    //       element;

    //     for (let i = 0; i < elements.length; i++) {
    //       element = elements[i];
    //       if (element instanceof Connection) {
    //         element.redraw(options);
    //       }
    //     }
    //   }

    //   kendo
    //     .jQuery("#connectionProperties")
    //     .on("change", connectionPropertiesChange);

    //   kendo.jQuery("#alignConfiguration .configurationButtons").kendoButton({
    //     click: function(e) {
    //       var value = this.element.data("position");
    //       diagram.alignShapes(value);
    //     }
    //   });

    //   kendo.jQuery("#arrangeConfiguration .configurationButtons").kendoButton({
    //     click: function(e) {
    //       var methodName = this.element.find("span").attr("class");
    //       diagram[methodName]();
    //     }
    //   });

    //   kendo.jQuery("#diagramZoomIndicator").change(function() {
    //     var value = kendo.jQuery(this).val();
    //     kendo
    //       .jQuery("#diagramZoom")
    //       .getKendoSlider()
    //       .value(value);
    //     diagram.zoom(value);
    //   });

      function reset() {
        diagram.clear();
      }

      function undo() {
        diagram.undo();
      }

      function redo() {
        diagram.redo();
      }

      function copyItem() {
        diagram.copy();
      }

      function pasteItem() {
        diagram.paste();
      }

      var actions = {
        blank: reset,
        undo: undo,
        redo: redo,
        copy: copyItem,
        paste: pasteItem
      };

      kendo.jQuery("#menu ul").kendoMenu({
        dataSource: [
          {
            text: "New",
            spriteCssClass: "new-item",
            items: [
              {
                text: "Blank",
                spriteCssClass: "blank-item",
                cssClass: "active"
              }
            ]
          },
          {
            text: "Open<input id='upload' type='file' name='files' />",
            encoded: false,
            spriteCssClass: "open-item",
            cssClass: "upload-item"
          },
          {
            text: "Save<a id='export' download='diagram.json'></a>",
            encoded: false,
            spriteCssClass: "save-item"
          },
          { text: "Undo", spriteCssClass: "undo-item", cssClass: "active" },
          { text: "Redo", spriteCssClass: "redo-item", cssClass: "active" },
          { text: "Copy", spriteCssClass: "copy-item", cssClass: "active" },
          { text: "Paste", spriteCssClass: "paste-item", cssClass: "active" }
        ],
        select: function(e) {
          var item = kendo.jQuery(e.item),
            itemText = item.children(".k-link").text();

          if (!item.hasClass("active")) {
            return;
          }

          actions[itemText.charAt(0).toLowerCase() + itemText.slice(1)]();
        }
      });

    //   kendo.jQuery("#export").on("click", function() {
    //     var json = JSON.stringify(diagram.save()),
    //       blob = new Blob([json], { type: "application/json" });

    //     if (navigator.msSaveBlob) {
    //       navigator.msSaveBlob(blob, this.getAttribute("download"));
    //     } else {
    //       this.href = window.URL.createObjectURL(blob);
    //     }
    //   });

    //   kendo.jQuery("#upload").kendoUpload({
    //     async: {
    //       saveUrl: "save",
    //       removeUrl: "remove",
    //       autoUpload: true
    //     },
    //     showFileList: false,
    //     localization: {
    //       select: ""
    //     },
    //     select: function(e) {
    //       if (typeof FileReader !== "undefined") {
    //         var f = e.files[0].rawFile,
    //           reader = new FileReader();

    //         reader.onload = (function(file) {
    //           return function(e) {
    //             diagram.load(JSON.parse(e.target.result));
    //           };
    //         })(f);

    //         reader.readAsBinaryString(f);
    //       }
    //     }
    //   });

    //   kendo.jQuery("#splitter").kendoSplitter({
    //     panes: [
    //       { collapsible: true, size: "200px" },
    //       { collapsible: false, scrollable: false },
    //       { collapsible: true, size: "300px" }
    //     ]
    //   });

      var diagram = kendo
        .jQuery("#diagram")
        .kendoDiagram({
          theme: "default",
          dataSource: {
            data: [
              {
                name: "0",
                items: [
                  {
                    name: "0"
                  }
                ]
              }
            ],
            schema: {
              model: {
                children: "items"
              }
            }
          },
          shapeDefaults: {
            width: 120,
            height: 120,
            fill: "#8ebc00"
          },
          layout: {
            type: "tree",
            subtype: "right"
          },
          select: function(e) {
            if (e.selected.length) {
              selected = e.selected;
              var element = e.selected[0];
              if (element instanceof Shape) {
                updateShapeProperties(element.options);
              } else {
                updateConnectionProperties(element.options);
              }
            }
          }
        })
        .getKendoDiagram();

      function updateShapeProperties(shape) {
        kendo
          .jQuery("#shapeBackgroundColorPicker")
          .getKendoColorPicker()
          .value(kendo.parseColor(shape.background));
        kendo
          .jQuery("#shapeStrokeColorPicker")
          .getKendoColorPicker()
          .value(kendo.parseColor(shape.stroke.color));
        kendo
          .jQuery("#shapeStrokeWidth")
          .getKendoNumericTextBox()
          .value(shape.stroke.width);
        kendo
          .jQuery("#shapeWidth")
          .getKendoNumericTextBox()
          .value(shape.width);
        kendo
          .jQuery("#shapeHeight")
          .getKendoNumericTextBox()
          .value(shape.height);
        kendo
          .jQuery("#shapePositionX")
          .getKendoNumericTextBox()
          .value(shape.x);
        kendo
          .jQuery("#shapePositionY")
          .getKendoNumericTextBox()
          .value(shape.y);
      }

      function updateConnectionProperties(shape) {
        kendo
          .jQuery("#connectionStartCap")
          .getKendoDropDownList()
          .value(shape.startCap);
        kendo
          .jQuery("#connectionEndCap")
          .getKendoDropDownList()
          .value(shape.endCap);
      }

    //   kendo
    //     .jQuery("#shapesPanelBar")
    //     .kendoPanelBar({
    //       expandMode: "multiple"
    //     })
    //     .getKendoPanelBar()
    //     .expand(">li", false);

    //   kendo
    //     .jQuery("#configurationPanelBar")
    //     .kendoPanelBar({
    //       expandMode: "multiple"
    //     })
    //     .getKendoPanelBar()
    //     .expand(">li", false);

    //   kendo.jQuery(".colorPicker").kendoColorPicker({
    //     value: "#ffffff",
    //     buttons: false
    //   });

    //   kendo.jQuery("#canvasLayout").kendoDropDownList({
    //     dataTextField: "text",
    //     dataValueField: "value",
    //     dataSource: [
    //       { value: "TreeDown", text: "Tree Down" },
    //       { value: "TreeUp", text: "Tree Up" },
    //       { value: "TreeLeft", text: "Tree Left" },
    //       { value: "TreeRight", text: "Tree Right" },
    //       { value: "RadialTree", text: "Radial Tree" },
    //       { value: "TipOverTree", text: "Tip-Over Tree" },
    //       { value: "LayeredHorizontal", text: "Layered Horizontal" },
    //       { value: "LayeredVertical", text: "Layered Vertical" },
    //       { value: "ForceDirected", text: "Force directed" },
    //       { value: "MindmapVertical", text: "Mindmap Vertical" },
    //       { value: "MindmapHorizontal", text: "Mindmap Horizontal" }
    //     ]
    //   });

    //   kendo.jQuery("#connectionStartCap").kendoDropDownList({
    //     dataTextField: "text",
    //     dataValueField: "value",
    //     dataSource: [
    //       { value: "None", text: "None" },
    //       { value: "ArrowStart", text: "Arrow Start" },
    //       { value: "ArrowEnd", text: "Arrow End" },
    //       { value: "FilledCircle", text: "Filed Circle" }
    //     ]
    //   });

    //   kendo.jQuery("#connectionEndCap").kendoDropDownList({
    //     dataTextField: "text",
    //     dataValueField: "value",
    //     dataSource: [
    //       { value: "None", text: "None" },
    //       { value: "ArrowStart", text: "Arrow Start" },
    //       { value: "ArrowEnd", text: "Arrow End" },
    //       { value: "FilledCircle", text: "Filed Circle" }
    //     ]
    //   });

    //   function updateSliderIndicator(e) {
    //     kendo.jQuery("#diagramZoomIndicator").attr("value", e.value);

    //     diagram.zoom(e.value / 100);
    //   }

    //   kendo.jQuery("#diagramZoom").kendoSlider({
    //     min: 10,
    //     max: 200,
    //     value: 100,
    //     smallStep: 10,
    //     largeStep: 50,
    //     tickPlacement: "none",
    //     showButtons: false,
    //     change: updateSliderIndicator,
    //     slide: updateSliderIndicator
    //   });

    //   kendo.jQuery(".numeric").kendoNumericTextBox();

    //   kendo.jQuery("#window").kendoWindow({
    //     visible: false,
    //     width: 800,
    //     resizable: false,
    //     title: "About"
    //   });

    //   kendo.jQuery("#about").click(function() {
    //     kendo
    //       .jQuery("#window")
    //       .getKendoWindow()
    //       .center()
    //       .open();
    //   });

      kendo.jQuery("#shapeItems .shape-item").kendoDraggable({
        hint: function() {
          return this.element.clone();
        }
      });

      kendo.jQuery("#diagram").kendoDropTarget({
        drop: function(e) {
          var item, pos, transformed;
          if (e.draggable.hint) {
            item = e.draggable.hint.data("shape");
            pos = e.draggable.hintOffset;
            pos = new Point(pos.left, pos.top);
            var transformed = diagram.documentToModel(pos);
            item.x = transformed.x;
            item.y = transformed.y;

            diagram.addShape(item);
          }
        }
      });
    });
  }
}
