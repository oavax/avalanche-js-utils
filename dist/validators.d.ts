/**
 * @packageDocumentation
 * @module avalanche-utils
 */
export declare const isKeyString: {
    (keyString: string, lengh: number): boolean;
    validator: string;
};
export declare const isAddress: {
    (address: string): boolean;
    validator: string;
};
export declare const isPrivateKey: {
    (privateKey: string): boolean;
    validator: string;
};
export declare const isPublicKey: {
    (publicKey: string): boolean;
    validator: string;
};
export declare const isHash: {
    (hash: string): boolean;
    validator: string;
};
/**
 * [isNumber verify param is a Number]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
export declare const isNumber: {
    (obj: any): boolean;
    validator: string;
};
/**
 * [isNumber verify param is a Number]
 * @param  {any}  obj [value]
 * @return {boolean}     [boolean]
 */
export declare const isInt: {
    (obj: any): boolean;
    validator: string;
};
/**
 * [isString verify param is a String]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
export declare const isString: {
    (obj: any): boolean;
    validator: string;
};
/**
 * [isBoolean verify param is a Boolean]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
export declare const isBoolean: {
    (obj: any): boolean;
    validator: string;
};
/**
 * [isArray verify param input is an Array]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
export declare const isArray: {
    (obj: any): boolean;
    validator: string;
};
/**
 * [isJson verify param input is a Json]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
export declare const isJsonString: {
    (obj: any): boolean;
    validator: string;
};
/**
 * [isObject verify param is an Object]
 * @param  {any}  obj [value]
 * @return {Boolean}     [boolean]
 */
export declare const isObject: {
    (obj: any): boolean;
    validator: string;
};
/**
 * [isFunction verify param is a Function]
 * @param  {any}  obj [value]
 * @return {Boolean}     [description]
 */
export declare const isFunction: {
    (obj: any): boolean;
    validator: string;
};
export declare const isHex: {
    (obj: any): boolean;
    validator: string;
};
export declare const isHttp: {
    (obj: any): boolean;
    validator: string;
};
export declare const isWs: {
    (obj: any): boolean;
    validator: string;
};
export declare enum DefaultBlockParams {
    earliest = "earliest",
    pending = "pending",
    latest = "latest"
}
export declare const isBlockNumber: {
    (obj: any): boolean;
    validator: string;
};
export declare const isBech32Address: {
    (raw: string): boolean;
    validator: string;
};
export declare const isBech32TestNetAddress: {
    (raw: string): boolean;
    validator: string;
};
export declare const isValidAddress: {
    (address: string): boolean;
    validator: string;
};
