import { invert, lighten, darken, rgba } from 'khroma';

class Theme {
  constructor() {
    this.background = '#333';
    this.mainBkg = '#1f2020';
    this.secondBkg = 'calculated';
    this.mainContrastColor = 'lightgrey';
    this.darkTextColor = lighten(invert('#323D47'), 10);
    this.lineColor = 'calculated';
    this.border1 = '#81B1DB';
    this.border2 = rgba(255, 255, 255, 0.25);
    this.arrowheadColor = 'calculated';
    this.fontFamily = '"trebuchet ms", verdana, arial';
    this.fontSize = '16px';
    this.labelBackground = '#181818';
    this.textColor = '#ccc';
    /* Flowchart variables */

    this.nodeBkg = 'calculated';
    this.nodeBorder = 'calculated';
    this.clusterBkg = 'calculated';
    this.clusterBorder = 'calculated';
    this.defaultLinkColor = 'calculated';
    this.titleColor = '#F9FFFE';
    this.edgeLabelBackground = 'calculated';

    /* Sequence Diagram variables */

    this.actorBorder = 'calculated';
    this.actorBkg = 'calculated';
    this.actorTextColor = 'calculated';
    this.actorLineColor = 'calculated';
    this.signalColor = 'calculated';
    this.signalTextColor = 'calculated';
    this.labelBoxBkgColor = 'calculated';
    this.labelBoxBorderColor = 'calculated';
    this.labelTextColor = 'calculated';
    this.loopTextColor = 'calculated';
    this.noteBorderColor = 'calculated';
    this.noteBkgColor = '#fff5ad';
    this.noteTextColor = 'calculated';
    this.activationBorderColor = 'calculated';
    this.activationBkgColor = 'calculated';
    this.sequenceNumberColor = 'black';

    /* Gantt chart variables */

    this.sectionBkgColor = darken('#EAE8D9', 30);
    this.altSectionBkgColor = 'calculated';
    this.sectionBkgColor2 = '#EAE8D9';
    this.taskBorderColor = rgba(255, 255, 255, 70);
    this.taskBkgColor = 'calculated';
    this.taskTextColor = 'calculated';
    this.taskTextLightColor = 'calculated';
    this.taskTextOutsideColor = 'calculated';
    this.taskTextClickableColor = '#003163';
    this.activeTaskBorderColor = rgba(255, 255, 255, 50);
    this.activeTaskBkgColor = '#81B1DB';
    this.gridColor = 'calculated';
    this.doneTaskBkgColor = 'calculated';
    this.doneTaskBorderColor = 'grey';
    this.critBorderColor = '#E83737';
    this.critBkgColor = '#E83737';
    this.taskTextDarkColor = 'calculated';
    this.todayLineColor = '#DB5757';

    /* state colors */
    this.labelColor = 'calculated';

    this.errorBkgColor = '#a44141';
    this.errorTextColor = '#ddd';
  }
  updateColors() {
    this.secondBkg = lighten(this.mainBkg, 16);
    this.lineColor = this.mainContrastColor;
    this.arrowheadColor = this.mainContrastColor;
    /* Flowchart variables */

    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.defaultLinkColor = this.lineColor;
    this.edgeLabelBackground = lighten(this.labelBackground, 25);

    /* Sequence Diagram variables */

    this.actorBorder = this.border1;
    this.actorBkg = this.mainBkg;
    this.actorTextColor = this.mainContrastColor;
    this.actorLineColor = this.mainContrastColor;
    this.signalColor = this.mainContrastColor;
    this.signalTextColor = this.mainContrastColor;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.mainContrastColor;
    this.loopTextColor = this.mainContrastColor;
    this.noteBorderColor = this.border2;
    this.noteTextColor = this.mainBkg;
    this.activationBorderColor = this.border1;
    this.activationBkgColor = this.secondBkg;

    /* Gantt chart variables */

    this.altSectionBkgColor = this.background;
    this.taskBkgColor = lighten(this.mainBkg, 23);
    this.taskTextColor = this.darkTextColor;
    this.taskTextLightColor = this.mainContrastColor;
    this.taskTextOutsideColor = this.taskTextLightColor;
    this.gridColor = this.mainContrastColor;
    this.doneTaskBkgColor = this.mainContrastColor;
    this.taskTextDarkColor = this.darkTextColor;

    /* state colors */
    this.labelColor = this.textColor;
  }
  calculate(overrides) {
    if (typeof overrides !== 'object') {
      // Calculate colors form base colors
      this.updateColors();
      return;
    }

    const keys = Object.keys(overrides);

    // Copy values from overrides, this is mainly for base colors
    keys.forEach(k => {
      this[k] = overrides[k];
    });

    // Calculate colors form base colors
    this.updateColors();
    // Copy values from overrides again in case of an override of derived value
    keys.forEach(k => {
      this[k] = overrides[k];
    });
  }
}

export const getThemeVariables = userOverrides => {
  const theme = new Theme();
  theme.calculate(userOverrides);
  return theme;
};