// Type definitions for full-emoji-list
// Project: https://github.com/eerkan/full-emoji-list
// Definitions by: Aaron Beall

export interface EmojiData {
    Emoji: string
    Name: string
    Version: string;
    CodePointsHex: string[];
    Status: 'fully-qualified' | 'minimally-qualified' | 'unqualified' | 'component';
    Group?: string
    SubGroup?: string
}

declare const fullEmojiList: EmojiData[];
export default fullEmojiList;
