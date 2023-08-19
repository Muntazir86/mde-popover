export type MdePopoverPositionX = 'before' | 'start' | 'center' | 'end' | 'after';
export const VALID_PositionX: MdePopoverPositionX[] = ['before', 'start', 'center', 'end', 'after'];

export type MdePopoverPositionY = 'above' | 'start' | 'center' | 'end' | 'below';
export const VALID_PositionY: MdePopoverPositionY[] = ['above', 'start', 'center', 'end', 'below'];

export type MdePopoverTriggerEvent = 'click' | 'hover' | 'none';

export type MdePopoverScrollStrategy = 'noop' | 'close' | 'block' | 'reposition';