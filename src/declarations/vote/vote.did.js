export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'VoteA' : IDL.Func([], [], ['oneway']),
    'VoteB' : IDL.Func([], [], ['oneway']),
    'VoteC' : IDL.Func([], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
