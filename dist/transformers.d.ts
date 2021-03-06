/**
 * @packageDocumentation
 * @module avalanche-utils
 */
import BN from 'bn.js';
export declare enum Units {
    wei = "wei",
    Kwei = "Kwei",
    Mwei = "Mwei",
    Gwei = "Gwei",
    szabo = "szabo",
    finney = "finney",
    ether = "ether",
    avax = "avax",
    Kether = "Kether",
    Mether = "Mether",
    Gether = "Gether",
    Tether = "Tether"
}
/** @hidden */
export declare const unitMap: Map<Units, string>;
/**
 * Convert Number to String
 */
export declare const numberToString: (obj: BN | number | string, radix?: number) => string;
/**
 * Convert Number to String
 */
export declare const numToStr: (input: any) => string;
export declare const add0xToString: (obj: string) => string;
export declare const strip0x: (obj: string) => string;
/**
 * Convert number to hex
 */
export declare const numberToHex: (obj: any) => string;
/**
 * Convert hex to Decimal number
 */
export declare const hexToNumber: (hex: string) => string;
/**
 * Convert hex to Big Number
 */
export declare const hexToBN: (hex: string) => BN;
/**
 * Converts any AVAX value into wei
 */
export declare const toWei: (input: BN | string, unit: Units) => BN;
/**
 * Converts any wei value into a AVAX value.
 */
export declare const fromWei: (wei: BN | string, unit: Units, options?: any) => string;
export declare class Unit {
    static from(str: BN | string): Unit;
    static Wei(str: BN | string): Unit;
    static Kwei(str: BN | string): Unit;
    static Mwei(str: BN | string): Unit;
    static Gwei(str: BN | string): Unit;
    static Szabo(str: BN | string): Unit;
    static Finney(str: BN | string): Unit;
    static Ether(str: BN | string): Unit;
    static AVAX(str: BN | string): Unit;
    static Kether(str: BN | string): Unit;
    static Mether(str: BN | string): Unit;
    static Gether(str: BN | string): Unit;
    static Tether(str: BN | string): Unit;
    wei: BN;
    unit: BN | string;
    constructor(str: BN | string | number);
    asWei(): this;
    asKwei(): this;
    asMwei(): this;
    asGwei(): this;
    asSzabo(): this;
    asFinney(): this;
    asEther(): this;
    asAVAX(): this;
    asKether(): this;
    asMether(): this;
    asGether(): this;
    asTether(): this;
    toWei(): BN;
    toKwei(): string;
    toGwei(): string;
    toMwei(): string;
    toSzabo(): string;
    toFinney(): string;
    toEther(): string;
    toAVAX(): string;
    toKether(): string;
    toMether(): string;
    toGether(): string;
    toTether(): string;
    toWeiString(): string;
    toHex(): string;
}
