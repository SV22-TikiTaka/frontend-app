
//유저 만기된 질문가져오기
export const showExpiredQuestions=async(user_id)
{
    try{
        const result=await axios.get(`/api/v1/users/${user_id}/questions`);
        return result;
    }
    catch(error)
    {
        return error;
    }
}

// 답변 보여주기
export const showComments = async()
{
    try{
        const result=await axios.get("/api/v1/users/comments");
    }
    catch(error){
        return error;
    }
}

//텍스트 답변 저장 
export const showValidComment = async(user_id)
{
    try{
        const result=await axios.get(`/api/v1/users/${user_id}/comments/text`);
    return result;
    }
    catch(error)
    {
        return error;
    }
}

//D-8 D-9 똑같은 url?
export const showValidSoundComments=async(user_id)
{
    try{
        const result=await axios.get(`/api/v1/users/${user_id}/comments/sound`);
        return result;
    }
    catch(error)
    {
        return error;
    }
}

//투표결과 보기
export const showValidVoteComments = async(user_id)
{
    try{
        const result=await axios.get(`/api/v1/users/${user_id}/comments/vote`);
        return result;
    }
    catch(error)
    {
        return error;
    }
}

//음성 답변 저장
export const createSoundComment=async(file,question_id)
{
    try{
        const result = await axios.post("/api/v1/comments/voice",{
            file,question_id
        })
        return result;
    }catch(error)
    {
        return error;
    }
}

//랜덤 질문 생성
export const showRandomQuestion = async()
{
    try{
        const result = await axios.get("/api/v1/questions/random");
        return result;
    }
    catch(error)
    {
        return error;
    }
}

//유저 정보보기
export const showUser = async(user_id)
{
    try{
        const result = await axios.get(`/api/v1/users/${user_id}`);
        return result;
    } catch(error)
    {
        return error;
    }
}

//질문 가져오기
export const getQuestion = async()
{
    try{
        const result = await axios.get("/api/v1/questions");
        return result;
    }catch(error)
    {
        return error;
    }
}

//질문 생성하기
export const createQuestion = async(data)
{
    //const [content,user_id,type,comment_type]=data;
    try{
        const result = await axios.post("/api/v1/questions",data);
        return result;
    }
    catch(error)
    {
        return error;
    }
}

//투표 답변 저장
export const updateVoteCount = async(vote_comment_id)
{
    try{
        const result = await axios.put(`/api/v1/comments/vote/${vote_comment_id}`);
        return result;
    }catch(error)
    {
        return error;
    }
}

//사용자가 등록한 투표를 저장
export const createVoteQuestion = async(user_id,data)
{
    // data={
    //     "question": {
    //       "content": "string",
    //       "user_id": 0,
    //       "type": "string",
    //       "comment_type": "string"
    //     },
    //     "option": [
    //       "string"
    //     ]
    //   }
    try{
        const result = await axios.post(`/api/v1/questions/vote/${user_id}`,data);
        return result;
    }catch(error)
    {
        return error;
    }
}

// 질문 url 가져오기  잘모르겠다
export const getQuestionUrl =async()
{
    try{
        const result = await axios.get("/api/v1/question/url");
        return result
    } catch(error)
    {
        return error;
    }
}

//텍스트 답변 저장
export const storeComment = async(data)
{
    // data={
    //     "content": "string",
    //     "type": "string",
    //     "question_id": 0
    //   }
    try{
        const result = await axios.post("/api/v1/comments/text",data);
        return result
    }catch(error)
    {
        return error;
    }
}
//답변 클릭시 답변 상세 정보 보기 기능 구현
export const showComment = async(comment_id)
{
    try{
        const result = await axios.get(`/api/v1/comments/${comment_id}`);
        return result;
    }catch(error)
    {
        return error;
    }
}

//히스토리 페이지에서 질문 클릭시 투표 결과 보기 기능 구현
export const showVoteResult= async(question_id)
{
    try{
        const result = await axios.get(`/api/v1/comments/vote/${question_id}`);
        return result;
    } catch(error)
    {
        return error;
    }
}