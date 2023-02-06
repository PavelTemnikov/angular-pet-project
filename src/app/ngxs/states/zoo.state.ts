import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { AddAnimal, FeedAnimals } from "../actions/animal.actions";

export interface ZooStateModel {
    feed: boolean;
    animals: string[];
}

@State<ZooStateModel>({
    name: 'zoo',
    defaults: {
        feed: false,
        animals: []
    }
})
@Injectable()
export class ZooState {
    @Action(FeedAnimals)
    feedAnimals(ctx: StateContext<ZooStateModel>) {
        const state = ctx.getState();
        // ctx.setState({
        //     ...state,
        //     feed: !state.feed
        // });
        ctx.patchState({ feed: !state.feed })
    }

    @Action(AddAnimal)
    addAnimal(ctx: StateContext<ZooStateModel>, action: AddAnimal) {
        const state = ctx.getState();
        // ctx.setState({
        //     ...state,
        //     animals: [...state.animals, action.name]
        // });
        ctx.patchState({ animals: [...state.animals, action.name] });
    }
}