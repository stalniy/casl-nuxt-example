import { c } from '@/static/roles_permissions';
import { AbilityBuilder } from '@casl/ability';

export const ability = AbilityBuilder.define(can => c(can));

export default function({ store }, inject) {
  ability.update(store.state.permissions);
  inject('ability', ability);

  if (process.client) {
    if (store.state.permissions && store.state.permissions.length) {
      localStorage.setItem('permissions', JSON.stringify(store.state.permissions));
    } else {
      localStorage.removeItem('permissions');
    }
  }

  return store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case 'setUser':
        ability.update(store.state.permissions);
        inject('ability', ability);
        break;
    }
  });
}
