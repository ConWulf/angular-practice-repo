import { BasicHighlightDirective } from './basic-highlight.directive';
import {ElementRef} from "@angular/core";

describe('BasicHighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new BasicHighlightDirective(new ElementRef<any>(null));
    expect(directive).toBeTruthy();
  });
});
