---
editLink: false
---

[API Documentation](../index.md) / [pinia](../modules/pinia.md) / DefineStoreOptionsInPlugin

# Interface: DefineStoreOptionsInPlugin\<Id, S, G, A\>

[pinia](../modules/pinia.md).DefineStoreOptionsInPlugin

Available `options` when creating a pinia plugin.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends `string` |
| `S` | extends [`StateTree`](../modules/pinia.md#StateTree) |
| `G` | `G` |
| `A` | `A` |

## Hierarchy

- `Omit`\<[`DefineStoreOptions`](pinia.DefineStoreOptions.md)\<`Id`, `S`, `G`, `A`\>, ``"id"`` \| ``"actions"``\>

  ↳ **`DefineStoreOptionsInPlugin`**

## Properties

### actions

• **actions**: `A`

Extracted object of actions. Added by useStore() when the store is built
using the setup API, otherwise uses the one passed to `defineStore()`.
Defaults to an empty object if no actions are defined.

___

### getters

• `Optional` **getters**: `G` & `ThisType`\<`UnwrapRef`\<`S`\> & [`_StoreWithGetters`](../modules/pinia.md#_StoreWithGetters)\<`G`\> & [`PiniaCustomProperties`](pinia.PiniaCustomProperties.md)\<`string`, [`StateTree`](../modules/pinia.md#StateTree), [`_GettersTree`](../modules/pinia.md#_GettersTree)\<[`StateTree`](../modules/pinia.md#StateTree)\>, [`_ActionsTree`](../modules/pinia.md#_ActionsTree)\>\> & [`_GettersTree`](../modules/pinia.md#_GettersTree)\<`S`\>

Optional object of getters.

#### Inherited from

Omit.getters

___

### state

• `Optional` **state**: () => `S`

Function to create a fresh state. **Must be an arrow function** to ensure
correct typings!

#### Type declaration

▸ (): `S`

##### Returns

`S`

#### Inherited from

Omit.state

## Methods

### hydrate

▸ **hydrate**(`storeState`, `initialState`): `void`

Allows hydrating the store during SSR when complex state (like client side only refs) are used in the store
definition and copying the value from `pinia.state` isn't enough.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storeState` | `UnwrapRef`\<`S`\> | the current state in the store |
| `initialState` | `UnwrapRef`\<`S`\> | initialState |

#### Returns

`void`

**`Example`**

If in your `state`, you use any `customRef`s, any `computed`s, or any `ref`s that have a different value on
Server and Client, you need to manually hydrate them. e.g., a custom ref that is stored in the local
storage:

```ts
const useStore = defineStore('main', {
  state: () => ({
    n: useLocalStorage('key', 0)
  }),
  hydrate(storeState, initialState) {
    // @ts-expect-error: https://github.com/microsoft/TypeScript/issues/43826
    storeState.n = useLocalStorage('key', 0)
  }
})
```

#### Inherited from

Omit.hydrate
