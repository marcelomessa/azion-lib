/* eslint-disable */
import { notImplemented } from '../_internal.js';

export const isExternal = (_obj) => false;

export const isDate = (val) => val instanceof Date;

export const isArgumentsObject = /*@__PURE__*/ notImplemented('util.types.isArgumentsObject');

export const isBigIntObject = (val) => val instanceof BigInt;

export const isBooleanObject = (val) => val instanceof Boolean;

export const isNumberObject = (val) => val instanceof Number;

export const isStringObject = (val) => val instanceof String;

export const isSymbolObject = (val) => val instanceof Symbol;

export const isNativeError = /*@__PURE__*/ notImplemented('util.types.isNativeError');

export const isRegExp = (val) => val instanceof RegExp;

export const isAsyncFunction = /*@__PURE__*/ notImplemented('util.types.isAsyncFunction');

export const isGeneratorFunction = /*@__PURE__*/ notImplemented('util.types.isGeneratorFunction');

export const isGeneratorObject = /*@__PURE__*/ notImplemented('util.types.isGeneratorObject');

export const isPromise = (val) => val instanceof Promise;

export const isMap = (val) => val instanceof Map;

export const isSet = (val) => val instanceof Set;

export const isMapIterator = /*@__PURE__*/ notImplemented('util.types.isMapIterator');

export const isSetIterator = /*@__PURE__*/ notImplemented('util.types.isSetIterator');

export const isWeakMap = (val) => val instanceof WeakMap;

export const isWeakSet = (val) => val instanceof WeakSet;

export const isArrayBuffer = (val) => val instanceof ArrayBuffer;

export const isDataView = (val) => val instanceof DataView;

export const isSharedArrayBuffer = (val) => val instanceof SharedArrayBuffer;

export const isProxy = /*@__PURE__*/ notImplemented('util.types.isProxy');

export const isModuleNamespaceObject = /*@__PURE__*/ notImplemented('util.types.isModuleNamespaceObject');

export const isAnyArrayBuffer = /*@__PURE__*/ notImplemented('util.types.isAnyArrayBuffer');

export const isBoxedPrimitive = /*@__PURE__*/ notImplemented('util.types.isBoxedPrimitive');

export const isArrayBufferView = /*@__PURE__*/ notImplemented('util.types.isArrayBufferView');

export const isTypedArray = /*@__PURE__*/ notImplemented('util.types.isTypedArray');

export const isUint8Array = /*@__PURE__*/ notImplemented('util.types.isUint8Array');

export const isUint8ClampedArray = /*@__PURE__*/ notImplemented('util.types.isUint8ClampedArray');

export const isUint16Array = /*@__PURE__*/ notImplemented('util.types.isUint16Array');

export const isUint32Array = /*@__PURE__*/ notImplemented('util.types.isUint32Array');

export const isInt8Array = /*@__PURE__*/ notImplemented('util.types.isInt8Array');

export const isInt16Array = /*@__PURE__*/ notImplemented('util.types.isInt16Array');

export const isInt32Array = /*@__PURE__*/ notImplemented('util.types.isInt32Array');

export const isFloat32Array = /*@__PURE__*/ notImplemented('util.types.isFloat32Array');

export const isFloat64Array = /*@__PURE__*/ notImplemented('util.types.isFloat64Array');

export const isBigInt64Array = /*@__PURE__*/ notImplemented('util.types.isBigInt64Array');

export const isBigUint64Array = /*@__PURE__*/ notImplemented('util.types.isBigUint64Array');

export const isKeyObject = /*@__PURE__*/ notImplemented('util.types.isKeyObject');

// export const isCryptoKey = /*@__PURE__*/ notImplemented('util.types.isCryptoKey');
export const isCryptoKey = (val) => typeof CryptoKey !== 'undefined' && val instanceof CryptoKey;

export default {
  isExternal,
  isDate,
  isArgumentsObject,
  isBigIntObject,
  isBooleanObject,
  isNumberObject,
  isStringObject,
  isSymbolObject,
  isNativeError,
  isRegExp,
  isAsyncFunction,
  isGeneratorFunction,
  isGeneratorObject,
  isPromise,
  isMap,
  isSet,
  isMapIterator,
  isSetIterator,
  isWeakMap,
  isWeakSet,
  isArrayBuffer,
  isDataView,
  isSharedArrayBuffer,
  isProxy,
  isModuleNamespaceObject,
  isAnyArrayBuffer,
  isBoxedPrimitive,
  isArrayBufferView,
  isTypedArray,
  isUint8Array,
  isUint8ClampedArray,
  isUint16Array,
  isUint32Array,
  isInt8Array,
  isInt16Array,
  isInt32Array,
  isFloat32Array,
  isFloat64Array,
  isBigInt64Array,
  isBigUint64Array,
  isKeyObject, // CryptoKey
};
