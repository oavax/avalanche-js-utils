/**
 * @packageDocumentation
 * @module avalanche-utils
 */
/** @hidden */
export declare enum AssertType {
    required = "required",
    optional = "optional"
}
/** @hidden */
export declare const validatorArray: any;
export declare function validateArgs(args: any, requiredArgs: any, optionalArgs: any): boolean;
export declare function generateValidateObjects(validatorObject: {
    [x: string]: any[];
}): {
    requiredArgs: any;
    optionalArgs: any;
};
declare const assertObject: (input: any) => (target: any, key: any, descriptor: PropertyDescriptor) => PropertyDescriptor;
export { assertObject };
