import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { NgxsDataRepository } from '@angular-ru/ngxs/repositories';
import { Computed, DataAction, Debounce, Payload, StateRepository } from '@angular-ru/ngxs/decorators';

export interface CountModel {
  val: number;
}

@StateRepository()
@State({
  name: 'count',
  defaults: { val: 0 }
})
@Injectable()
export class CountState extends NgxsDataRepository<CountModel> {
  @Computed()
  public get values$() {
    return this.state$.pipe(map((state: any) => state.countSub));
  }

  @DataAction()
  public increment(): void {
    this.ctx.setState((state) => ({ val: state.val + 1 }));
  }

  @DataAction()
  public decrement(): void {
    this.ctx.setState((state) => ({ val: state.val - 1 }));
  }

  @Debounce()
  @DataAction()
  public setValueFromInput(@Payload('value') val: any): void {
    this.ctx.setState({ val });
  }
}

