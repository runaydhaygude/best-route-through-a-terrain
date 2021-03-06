
export interface ApplicationState {
    showMenu: boolean;
    showCard: boolean;
    findPath: boolean;
    content: 'welcome' | 'instructions' | 'about-me' | 'how-was-this-made';
    speed: number;
    showInstructionDelay: string;
}
  
export const INITIAL_STATE: ApplicationState = {
    showMenu: false,
    showCard: true,
    findPath: true,
    content: 'welcome',
    speed: 1,
    showInstructionDelay: '0s'
};
