import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { FeedAnimals } from "../actions/animal.actions";

export interface ZooStateModel {
    feed: boolean;
}

@State<ZooStateModel>({
    name: 'zoo',
    defaults: {
        feed: false
    }
})
@Injectable()
export class ZooState {
    @Action(FeedAnimals)
    feedAnimals(ctx: StateContext<ZooStateModel>) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            feed: !state.feed
        });
    }
}