import {GridsterConfig} from "angular-gridster2";

export class ChartGridOptionModel {
    opts: GridsterConfig;

    constructor(

    ) {
        this.opts = {
            draggable: {
                enabled: true,
                ignoreContent: true,
                // ignoreContentClass: 'panel-name-input',
                // dragHandleClass: 'dragable-area',
            },
            displayGrid: "onDrag&Resize",
            resizable: {
                enabled: true
            },
            itemResizeCallback: ChartGridOptionModel.itemResize,
            maxCols: 2,
            // fixedColWidth: 250,
            // fixedRowHeight: 250,
            minItemRows: 2,
            defaultItemRows: 2,
            pushItems: true,
            gridType: 'verticalFixed',
            maxItemArea: 16,
            // mobileBreakpoint: 640
        };
    }

    static itemResize(item, itemComponent): void {
        
        setTimeout( () => {
            if(itemComponent.el.getElementsByClassName('full-width-height')[0].clientHeight !==0 ){
                console.log('resize');
                let clientHeight = itemComponent.el.getElementsByClassName('full-width-height')[0].clientHeight;
                let clientWidth = itemComponent.el.getElementsByClassName('full-width-height')[0].clientWidth;
                item.view = [clientWidth, clientHeight];
                item.cols = itemComponent.$item.cols;
                item.rows = itemComponent.$item.rows;
                // let main = <HTMLElement>document.getElementsByClassName('main-content')[0];
                // main.style.height =  (document.getElementsByClassName('gridster')[0].scrollHeight+50).toString()+"px";
            }
        },2000);
    }
}

