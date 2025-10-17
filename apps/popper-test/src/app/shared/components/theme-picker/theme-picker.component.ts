import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgStyle } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'theme-picker',
    templateUrl: './theme-picker.component.html',
    styleUrls: ['./theme-picker.component.scss'],
    imports: [MatButton, NgStyle, MatIcon]
})
export class ThemePickerComponent implements OnInit {
  hovering: any = null;

  @HostBinding('class.mat-elevation-z4') elevation = true;

  items: any = [
    {
      className: 'indigo-pink-theme',
      styles: {
        'background-color': '#6750A4',  // M3 violet-50
        background:
          '-webkit-linear-gradient(-45deg, #6750A4 0%, #6750A4 50%, #F06292 51%, #F06292 100%)',  // violet + rose
      },
    },
    // {
    //   className: 'deeppurple-amber-theme',
    //   styles: {
    //     'background-color': '#6750A4',  // M3 violet-50
    //     background:
    //       '-webkit-linear-gradient(-45deg, #6750A4 0%, #6750A4 50%, #FF9800 51%, #FF9800 100%)',  // violet + orange
    //   },
    // },
    {
      className: 'pink-bluegrey-theme',
      styles: {
        'background-color': '#AB2E5C',  // M3 rose-50 (dark)
        background:
          '-webkit-linear-gradient(-45deg, #AB2E5C 0%, #AB2E5C 50%, #5E92F3 51%, #5E92F3 100%)',  // rose + azure (dark theme)
      },
    },
    // {
    //   className: 'pink-grey-theme',
    //   styles: {
    //     'background-color': '#AB2E5C',  // M3 rose-50 (dark)
    //     background:
    //       '-webkit-linear-gradient(-45deg, #AB2E5C 0%, #AB2E5C 50%, #5E92F3 51%, #5E92F3 100%)',  // rose + azure (dark theme)
    //   },
    // },
    {
      className: 'indigo-grey-theme',
      styles: {
        'background-color': '#6750A4',  // M3 violet-50
        background:
          '-webkit-linear-gradient(-45deg, #6750A4 0%, #6750A4 50%, #90CAF9 51%, #90CAF9 100%)',  // violet + azure
      },
    },
    {
      className: 'purple-green-theme',
      styles: {
        'background-color': '#8559A5',  // M3 violet-50 (dark)
        background:
          '-webkit-linear-gradient(-45deg, #8559A5 0%, #8559A5 50%, #4CAF50 51%, #4CAF50 100%)',  // violet + green (dark theme)
      }
    },
    {
      className: 'cyan-orange-theme',
      styles: {
        'background-color': '#00ACC1',  // M3 cyan-50 (dark)
        background:
          '-webkit-linear-gradient(-45deg, #00ACC1 0%, #00ACC1 50%, #FF9800 51%, #FF9800 100%)',  // cyan + orange (dark theme)
      }
    },
    {
      className: 'custom-dark-theme',
      styles: {
        'background-color': '#CA9577',  // Custom primary color (warm terracotta)
        background:
          '-webkit-linear-gradient(-45deg, #CA9577 0%, #CA9577 50%, #387A71 51%, #387A71 100%)',  // custom primary + tertiary
      }
    },
    // {
    //   className: 'custom-standalone-dark-theme',
    //   styles: {
    //     'background-color': '#9c6c51',  // Custom primary-50 (dark)
    //     background:
    //       '-webkit-linear-gradient(-45deg, #9c6c51 0%, #9c6c51 50%, #408279 51%, #408279 100%)',  // custom primary + tertiary (dark)
    //   }
    // },
  ];

  /*
{
  className: '',
  styles: {
    'background-color': '#f44336'
  }
},
{
  className: 'purple-green-theme',
  styles: {
    'background-color': '#2196f3'
  }
},
{
  className: 'candy-app-theme',
  styles: {
    'background-color': '#ff5722'
  }
}
*/

  themeValue = '';
  @Output() themeChange = new EventEmitter();

  @Input()
  get theme() {
    return this.themeValue;
  }

  set theme(val) {
    this.themeValue = val;
    this.themeChange.emit(this.themeValue);
  }

  constructor() {}

  ngOnInit() {}

  onItemKeydown(event, className = null) {
    const next = new ElementRef(event.nextSibling);

    if (event.keyCode === 9) {
      console.log('onItemKeydown', event);
      this.hovering = className;
    }
  }
}
