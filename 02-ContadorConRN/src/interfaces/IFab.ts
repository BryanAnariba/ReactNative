export interface IFab {
    title: string;
    position?: 'btnRight' | 'btnLeft' | 'btnCenter';
    onPress: () => void;
};